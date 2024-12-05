<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'category_uuid',
        'quantity_unit_uuid',
        'name',
        'description',
        'price',
        'image'
    ];

    protected $hidden = [
        'category_uuid',
        'quantity_unit_uuid',
        'created_at',
        'updated_at'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_uuid', 'uuid');
    }

    public function quantityUnit()
    {
        return $this->belongsTo(QuantityUnit::class, 'quantity_unit_uuid', 'uuid');
    }
}
