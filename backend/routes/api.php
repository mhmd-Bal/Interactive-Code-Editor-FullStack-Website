<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CodeController;
use App\Http\Controllers\UserController;

Route::group(["prefix" => "v0.0.1"], function(){

        Route::post('/login',[AuthController:: class, "login"]);
        Route::post('/register',[AuthController:: class, "register"]);
        Route::post('/logout',[AuthController:: class, "logout"]);
        Route::post('/refresh',[AuthController:: class, "refresh"]);
        Route::get('/me',[AuthController:: class, "me"]);

        
        Route::group(["middleware" => ["auth:api"]], function(){
            
            Route::post('/users', [UserController::class, 'getUsers']);
            Route::get('/users/search', [UserController::class, 'search']);

            Route::group(["prefix" => "code"], function(){
                Route::post('/save',[CodeController:: class, "saveCode"]);
                Route::get('/get_saved/{id}',[CodeController:: class, "getSavedCodes"]);
                Route::get('/{id}',[CodeController:: class, "getCodes"]);
                Route::post('/add',[CodeController:: class, "insertCode"]);
            });
        });
});