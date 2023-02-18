<?php

use App\Events\UserColorChanged;
use App\Http\Controllers\AuthController;
use App\Models\User;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $user = User::where('id',1)->first();
    return inertia('Home',['user' => $user]);
});

Route::get('user/register',[AuthController::class,'register'])->name('user.register');
Route::post('user/store',[AuthController::class,'store'])->name('user.store');
