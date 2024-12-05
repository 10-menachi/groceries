<?php

use App\Http\Controllers\ProfileController;
use App\Models\Product;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('HomePage');
})->name('welcome');

Route::get('/products', function () {
    return Inertia::render('Products', [
        'products' => Product::with('category', 'quantityUnit')->get()
    ]);
})->name('products');

Route::get('/checkout', function () {
    return Inertia::render('Checkout', [
        'delivery_fees' => 200
    ]);
})->name('checkout');

Route::get('/products/{uuid}', function (string $uuid) {
    return Inertia::render('ProductOverview', [
        'product' => Product::with('category', 'quantityUnit')->where('uuid', $uuid)->firstOrFail()
    ]);
})->name('products');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/dashboard', function () {
    return redirect()->route('welcome');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
