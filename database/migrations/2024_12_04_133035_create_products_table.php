<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->uuid('uuid')->primary(); 
            $table->string('name');
            $table->text('description')->nullable();
            $table->foreignUuid('category_uuid')
                ->constrained('categories', 'uuid') 
                ->cascadeOnDelete();
            $table->foreignUuid('quantity_unit_uuid')
                ->constrained('quantity_units', 'uuid') 
                ->cascadeOnDelete();
            $table->decimal('price', 10, 2);
            $table->string('image')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
