<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FurnitureController;
use App\Http\Controllers\WebController;
use App\Models\City;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::get('/cities', function (Request $request) {
    return response()->json(['data'=>City::all()]);
});

Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    Route::resource('category', CategoryController::class);
    Route::resource('furniture', FurnitureController::class);
    Route::get('furniture/get/{id}', [FurnitureController::class,'get_one']);
    Route::get('bookings',[FurnitureController::class,'get_bookings']);
});



Route::get("/getCat",[WebController::class,"getCat"]);
Route::post("/signin",[AuthController::class,"signin"]);
Route::post("/signup",[AuthController::class,"signup"]);
