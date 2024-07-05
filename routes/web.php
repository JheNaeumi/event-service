<?php

use App\Http\Controllers\EventController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/event')->name('index');
Route::resource('event', EventController::class);
   