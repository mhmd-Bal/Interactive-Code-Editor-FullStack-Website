<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::group(["prefix" => "v0.0.0"], function(){

        Route::post('/login',[AuthController:: class, "login"]);
        Route::post('/register',[AuthController:: class, "register"]);
        Route::post('/logout',[AuthController:: class, "logout"]);
        Route::post('/refresh',[AuthController:: class, "refresh"]);
        Route::get('/me',[AuthController:: class, "me"]);
    

    Route::group(["middleware" => ["auth:api"]], function(){
        //Routes demanding verifications 
    });
});