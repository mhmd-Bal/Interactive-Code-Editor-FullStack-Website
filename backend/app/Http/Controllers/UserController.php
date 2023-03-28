<?php
namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class UserController extends Controller
{
    public function getUsers()
    {
        $users = DB::table('users')->where('is_admin', '=', 0)->get();
        return response()->json([
            'status' => 'success',
            'users' => $users
        ]);
    }

    public function getReceiver($id){
        $receiver=User::select("username")->find($id);

        return response()->json([
            'receiver'=>$receiver->username
        ]);
    }

    public function search(Request $request)
    {
    $query = $request->input('search_input');
    $users = User::where('username', 'like', "%$query%")
                 ->orWhere('email', 'like', "%$query%")
                 ->get();

    if ($users->isEmpty()) {
    return response()->json([
        'status' => 'error',
        'message' => 'No users found for the given search criteria'
    ], 204);
    }
    
    return response()->json([
        'status' => 'success',
        'users' => $users
    ]);
}
}
