<?php 

namespace Classifieds\Repositories;

use Classifieds\Ad;
use Carbon\Carbon;

class AdRepository
{
    public function live()
    {
        $now = Carbon::now()->toDateTimeString();
        return Ad::where('expired_at','>', $now)
                ->where('status','LIVE')
                ->get();
    }
}
