<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CarModel extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'brand_id',
        'name',
        'external_id',
        'last_update',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'last_update' => 'datetime'
    ];

    // İlişkiler
    public function brand()
    {
        return $this->belongsTo(CarBrand::class, 'brand_id');
    }
}
