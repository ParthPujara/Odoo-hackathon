<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\WebController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Support\Facades\Route;

Route::get('/',[WebController::class,'homepage']);
Route::get('/login',[AuthController::class,'login']);
Route::post('/login',[AuthController::class,'authenticate']);
Route::get('/register',[AuthController::class,'register']);
Route::post('/register',[AuthController::class,'registerUser']);
Route::get('/rentItem/{id}',[WebController::class,'rentItem']);



Route::post('createOrder',[PaymentController::class,'createOrder']);
Route::post('verifyOrder',[PaymentController::class,'verifyOrder']);
Route::post('purchases',[PaymentController::class,'purchases']);



Route::get('/email/verify', function () {
    return view('auth.verify-email');
})->middleware('auth')->name('verification.notice');

Route::get('/email/verify/{id}/{hash}', [AuthController::class, '__invoke'])
    ->middleware(['signed', 'throttle:6,1'])
    ->name('verification.verify');


Route::get('explore/{id}',[WebController::class,'listing']);