<?php

namespace Classifieds;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    const PENDING = "PENDING";
    const LIVE = "LIVE";
    const EXPIRED = "EXPIRED";
}
