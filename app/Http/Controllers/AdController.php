<?php

namespace Classifieds\Http\Controllers;

use Illuminate\Http\Request;
use Classifieds\Ad;
use Classifieds\Repositories\AdRepository;
use Carbon\Carbon;

class AdController extends Controller
{
    public $adRepository;
    
    public function __construct(AdRepository $adRepository)
    {
        $this->adRepository = $adRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ads = Ad::all();
        return response()->json($ads);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $ad = new Ad([
          'title' => $request->get('title'),
          'subtitle' => $request->get('subtitle'),
          'description' => $request->get('description'),
          'expired_at' => Carbon::now()->addMonth()
        ]);
        $ad->save();


        return response()->json('Ad Added Successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $ad = Ad::find($id);
        return response()->json($ad);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $ad = Ad::find($id);
        return response()->json($ad);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $ad = Ad::find($id);
        $ad->title = $request->get('title');
        $ad->body = $request->get('body');
        $ad->save();


        return response()->json('Ad Updated Successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $ad = Ad::where('id',$id)->withTrashed();
        $ad->delete();

        return response()->json('Ad Deleted Successfully.');
    }
    
    public function home(Request $request)
    {
        $ads = $this->adRepository->live();
        return view('home')->with('ads', $ads);
    }
    
    public function activate($id)
    {
        $ad = Ad::where('id',$id)->withTrashed()->first();
        $ad->status = Ad::STATUS_LIVE;
        $ad->expired_at = Carbon::now()->addDays(30);
        $ad->save();

        return response()->json('Ad is now live.');
    }
    
    public function deactivate($id)
    {
        $ad = Ad::where('id',$id)->withTrashed()->first();
        $ad->status = Ad::STATUS_PENDING;
        $ad->save();

        return response()->json('Ad set to pending status successfully.');
    }
}
