<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CarBrand extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'logo',
        'external_id',
        'last_update',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'last_update' => 'datetime'
    ];

    // İlişkiler
    public function models()
    {
        return $this->hasMany(CarModel::class, 'brand_id');
    }

    // Logo URL'sini almak için accessor
    public function getLogoUrlAttribute()
    {
        return $this->logo ? asset('storage/' . $this->logo) : null;
    }
}
