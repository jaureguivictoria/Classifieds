<?php

namespace Classifieds;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Ad extends Model
{
    use SoftDeletes;
    
    public const STATUS_PENDING = 'PENDING';
    public const STATUS_EXPIRED = 'EXPIRED';
    public const STATUS_LIVE = 'LIVE';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'subtitle',
        'description',
        'status',
        'expired_at',
    ];
    
    public function getStatusAttribute($value)
    {
        switch ($value) {
            case self::STATUS_PENDING:
                $status = 'Pendiente';
                break;
            case self::STATUS_LIVE:
                $status = 'En vivo';
                break;
            case self::STATUS_EXPIRED:
                $status = 'Vencido';
                break;
            
            default:
                $status = '';
                break;
        }
        return $status;
    }
    
}
