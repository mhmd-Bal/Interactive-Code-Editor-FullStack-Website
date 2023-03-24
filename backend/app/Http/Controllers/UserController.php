<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUsers()
    {
        $gender=Auth::user()->gender;

        if ($gender=='male'){
            $oppsiteGender='female';
        }
        else {
            $oppsiteGender = 'male';
        }

        $users = DB::table('app_users')->where('gender', $oppsiteGender)->get();
        return response()->json([
            'status' => 'success',
            'users' => $users
        ]);
    }
}
