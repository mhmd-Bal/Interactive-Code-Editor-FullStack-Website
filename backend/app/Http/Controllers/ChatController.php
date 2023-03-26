<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Chat;

class ChatController extends Controller
{
    public function sendMessage(Request $request){
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
        $message = Chat::where("sender_id",$request->sender_id)
        ->where("receiver_id",$request->receiver_id)->orWhere("receiver_id",$request->sender_id)->where("sender_id",$request->receiver_id)->get();
        return response()->json([
            "Message" => $message,
        ]);
    }
}
