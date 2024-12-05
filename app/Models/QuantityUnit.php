<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QuantityUnit extends Model
{
    protected $fillable = [
        'unit',
        'description'
    ];

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
