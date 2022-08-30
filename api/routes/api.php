<?php

use App\Http\Controllers\FavoritesController;
use App\Http\Controllers\UserController;
use App\Models\Favorites;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get("data/{user_id}",[FavoritesController::class,'getData']);
Route::post('add',[FavoritesController::class, 'store']);
Route::delete('favorite/delete/{id}',[FavoritesController::class, 'delete']);

Route::post('login',[UserController::class,'index']);
Route::post('register',[UserController::class,'register']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::middleware('auth:sanctum')->delete('favorite/delete/{id}', [FavoritesController::class, 'delete']);
