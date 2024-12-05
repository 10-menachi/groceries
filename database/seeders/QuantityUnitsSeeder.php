<?php

namespace Database\Seeders;

use App\Models\QuantityUnit;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class QuantityUnitsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        QuantityUnit::create([
            'uuid'=> Str::uuid(),
            'unit' => 'kg',
            'description' => 'Kilogram'
        ]);

        QuantityUnit::create([
            'uuid'=> Str::uuid(),
            'unit' => 'leaf',
            'description' => 'Leaf'
        ]);

        QuantityUnit::create([
            'uuid'=> Str::uuid(),
            'unit' => 'bunch',
            'description' => 'Bunch'
        ]);

        QuantityUnit::create([
            'uuid'=> Str::uuid(),
            'unit' => 'punnet',
            'description' => 'Punnet (250g)'
        ]);

        QuantityUnit::create([
            'uuid'=> Str::uuid(),
            'unit' => 'piece',
            'description' => 'Piece'
        ]);

        QuantityUnit::create([
            'uuid'=> Str::uuid(),
            'unit' => 'tray',
            'description' => 'Tray'
        ]);

        QuantityUnit::create([
            'uuid'=> Str::uuid(),
            'unit' => 'packet',
            'description' => 'Packet (125g)'
        ]);
    }
}
