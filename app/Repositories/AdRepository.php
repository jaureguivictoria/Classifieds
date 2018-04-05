<?php 

namespace Classifieds\Repositories;

use Classifieds\Ad;
use Carbon\Carbon;

class AdRepository
{
    
    public function all()
    {
        $now = Carbon::now()->toDateTimeString();
        return Ad::where('expired_at','>', $now)->get();
    }
}
