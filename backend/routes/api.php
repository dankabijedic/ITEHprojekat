<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\KursController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/profile', function (Request $request) {
        return auth()->user();
    });
    Route::resource('/posts', PostController::class)->only(['index']);
    // API route for logout user 
    Route::resource('/courses', KursController::class)->only(['index']);

    Route::get('/cart', [CartController::class, 'viewcart']);

    Route::put('cart-updatequantity/{cart_id}/{scope}', [CartController::class, 'updatequantity']);

    Route::delete('delete-cartitem/{cart_id}', [CartController::class, 'deleteCartitem']);

    Route::post('add-to-cart', [CartController::class, 'addtocart']);

    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::group(['middleware' => ['auth:sanctum', 'isAdmin']], function () {
    Route::resource('/add-course', KursController::class)->only(['store']);
    Route::resource('/edit-course/{id}', KursController::class)->only(['update']);
});

Route::resource('/posts', PostController::class)->only(['index']);
Route::resource('/courses', KursController::class)->only(['index']);
Route::get('/courses/{course_id}', [KursController::class, 'getKurs']);
