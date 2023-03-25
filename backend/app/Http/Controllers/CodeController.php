<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Code;

class CodeController extends Controller
{
    public function getSaved($name){
        $code=Code::where('name',$name)->get();
        return response()->json([
            'code'=> $code
        ]);
    }

    public function saveCode(Request $request)
    {
        $name=$request->name;
        $content=$request->content;
        $user_id=$request->user_id;
        $check=Code::where('user_id',$user_id)->where('name',$name)->get();

        if($check->count()==0){
            $save=Code::create([
                'name'=>$name,
                'content'=>$content,
                'user_id'=>$user_id,
            ]);
            return response()->json([
                'status'=>'Saved'
            ]);
        }
        else{
            return response()->json([
                'status'=>'Name of the file is already picked, choose another one'
            ]);
        }

       
    }
}
