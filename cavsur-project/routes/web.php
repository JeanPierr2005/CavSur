<?php
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RefereeController;
use App\Http\Controllers\MatchController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\RolController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return view('welcome');
});
Auth::routes();

Route::get('/home', [\App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [\App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::resource('/referee', RefereeController::class);
Route::resource('/match', MatchController::class);
Route::resource('/event', EventController::class);

Route::group(['middleware' => ['auth']], function(){
    Route::resource('roles', RolController::class);
    Route::resource('usuarios', UsuarioController::class);
});
