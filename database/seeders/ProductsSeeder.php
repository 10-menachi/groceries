<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use App\Models\QuantityUnit;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $fruits_veggies = Category::where('name', 'Fruits & Vegetables')->first();
        $kg = QuantityUnit::where('unit', 'kg')->first();
        $leaf = QuantityUnit::where('unit', 'leaf')->first();
        $bunch = QuantityUnit::where('unit', 'bunch')->first();
        $punnet = QuantityUnit::where('unit', 'punnet')->first();

        Product::create([
            'uuid' => Str::uuid(),
            'category_uuid' => $fruits_veggies->uuid,
            'quantity_unit_uuid' => $kg->uuid,
            'name' => 'Arrow Roots',
            'description' => 'Arrowroot is a starchy root vegetable similar to yam, cassava, sweet potato, and taro. It is native to South America, but is now cultivated widely in the Caribbean, Africa, and Southeast Asia.',
            'price' => 120.00,
            'image' => 'arrowroots.webp'
        ]);

        Product::create([
            'uuid' => Str::uuid(),
            'category_uuid' => $fruits_veggies->uuid,
            'quantity_unit_uuid' => $kg->uuid,
            'name' => 'Asparagus',
            'description' => 'Asparagus, or garden asparagus, folk name sparrow grass, scientific name Asparagus officinalis, is a perennial flowering plant species in the genus Asparagus.',
            'price' => 850.00,
            'image' => 'asparagus.webp'
        ]);

        Product::create([
            'uuid' => Str::uuid(),
            'category_uuid' => $fruits_veggies->uuid,
            'quantity_unit_uuid' => $kg->uuid,
            'name' => 'Asparagus Lettuce',
            'description' => 'Asparagus lettuce is a type of lettuce that is grown for its thick, crisp stems. It is also known as celtuce, stem lettuce, or asparagus lettuce.',
            'price' => 220.00,
            'image' => 'asparaguslettuce.webp'
        ]);

        Product::create([
            'uuid' => Str::uuid(),
            'category_uuid' => $fruits_veggies->uuid,
            'quantity_unit_uuid' => $kg->uuid,
            'name' => 'Aubergine',
            'description' => 'Aubergine, also known as eggplant or brinjal, is a plant species in the nightshade family Solanaceae. Solanum melongena is grown worldwide for its edible fruit.',
            'price' => 80.00,
            'image' => 'aubergine.webp'
        ]);

        Product::create([
            'uuid' => Str::uuid(),
            'category_uuid' => $fruits_veggies->uuid,
            'quantity_unit_uuid' => $kg->uuid,
            'name' => 'Banana (Green)',
            'description' => 'Bananas are a popular fruit that happens to provide numerous health benefits. Among other things, they may boost digestive and heart health due to their fiber and antioxidant content.',
            'price' => 80.00,
            'image' => 'bananagreen.webp'
        ]);

        Product::create([
            'uuid' => Str::uuid(),
            'category_uuid' => $fruits_veggies->uuid,
            'quantity_unit_uuid' => $leaf->uuid,
            'name' => 'Banana (Leaf)',
            'description' => 'Banana leaves are large, flexible, and waterproof. They impart an aroma to food that is cooked in or served on them; steaming with banana leaves imparts a subtle sweet flavor and aroma to the dish.',
            'price' => 70.00,
            'image' => 'bananaleaf.webp'
        ]);

        Product::create([
            'uuid' => Str::uuid(),
            'category_uuid' => $fruits_veggies->uuid,
            'quantity_unit_uuid' => $kg->uuid,
            'name' => 'Banana (Plantain)',
            'description' => 'Plantains are a member of the banana family. They are a starchy, low in sugar variety that is cooked before serving as it is unsuitable raw. It is used in many savory dishes somewhat like a potato would be used.',
            'price' => 200.00,
            'image' => 'bananaplantain.webp'
        ]);

        Product::create([
            'uuid' => Str::uuid(),
            'category_uuid' => $fruits_veggies->uuid,
            'quantity_unit_uuid' => $bunch->uuid,
            'name' => 'Basil',
            'description' => 'Basil is a herb that is used in a variety of dishes. It is a member of the mint family and is known for its strong aroma and flavor.',
            'price' => 25.00,
            'image' => 'basil.webp'
        ]);

        Product::create([
            'uuid' => Str::uuid(),
            'category_uuid' => $fruits_veggies->uuid,
            'quantity_unit_uuid' => $punnet->uuid,
            'name' => 'Bean Sprouts',
            'description' => 'Bean sprouts are a common ingredient, especially in Eastern Asian cuisine, made from sprouting beans. The typical bean sprout is made from the greenish-capped mung beans.',
            'price' => 120.00,
            'image' => 'beansprouts.webp'
        ]);

        Product::create([
            'uuid' => Str::uuid(),
            'category_uuid' => $fruits_veggies->uuid,
            'quantity_unit_uuid' => $kg->uuid,
            'name' => 'Beetroot',
            'description' => 'The beetroot is the taproot portion of a beet plant, usually known in North America as the beet, and also known as the table beet, garden beet, red beet, dinner beet, or golden beet.',
            'price' => 120.00,
            'image' => 'beetroot.webp'
        ]);
    }
}
