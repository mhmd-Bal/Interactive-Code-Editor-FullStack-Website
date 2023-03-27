<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Chat;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function sendMessage(Request $request){
        $sender_id = Auth::id();

        $message = Chat::create([
            'sender_id' => $request->sender_id,
            'receiver_id' => $request->receiver_id,
            'content' => $request->content,
        ]);
        return response()->json([
            "Message" => $message,
            'status'=>'Message is sent'
        ]);
    }
    public function getMessage(Request $request){
        $sender_id = Auth::id();

        $message = Chat::where("sender_id",$sender_id)
        ->where("receiver_id",$request->receiver_id)->orWhere("receiver_id",$sender_id)->where("sender_id",$request->receiver_id)->orderBy('created_at', 'asc')->get();
        return response()->json([
            "Message" => $message,
        ]);
    }
}
