<?php
namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getUsers()
    {
        $logged_in_user = Auth::id();
        $users = DB::table('users')->where('is_admin', '=', 0)->whereNot("id",$logged_in_user)->get();
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
