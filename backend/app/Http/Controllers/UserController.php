<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class UserController extends Controller
{
    public function getUsers()
    {
        $users = DB::table('users')->get();
        return response()->json([
            'status' => 'success',
            'users' => $users
        ]);
    }
    public function search(Request $request)
{
    $query = $request->input('q');
    $users = User::where('username', 'like', "%$query%")
                //  ->orWhere('email', 'like', "%$query%")
                 ->get();
    
    return response()->json([
        'status' => 'success',
        'users' => $users
    ]);
}
}
