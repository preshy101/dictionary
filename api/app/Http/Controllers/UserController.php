<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function index(Request $request){
        $rules=array(
            "email"=>"required",
            "password"=>"required"

        );
        $validator= Validator::make($request->all(),$rules);
        if (!$validator){
            return $validator->errors();
        }else{
             $user= User::where('email',$request->email)->first();
        if(!$user || !Hash::check($request->password, $user->password)){
            return response([
                'message' => ['These credentials do not match our records.']
            ],404);
        }
        // $token = $user->createToken('my-app-token')->plainTextToken;
        // $response = [
        //     'user' =>$user,
        //     'token'=>$token
        // ];
        // return response($response , 201);

        return $user->createToken($request->device_name)->plainTextToken;
        }

    }

    public function register(Request $request){

        $rules=array(
            "name"=>"required|min:2|max:191",
            "email"=>"required|unique",
            "password"=>"required|min:6|max:191"

        );
        $validator= Validator::make($request->all(),$rules);
        if (!$validator){
            return $validator->errors();
        }else{
            $user = new User;
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->save();
            // return response()->json(['message'=>'User created successfully '],200);
            $token = $user->createToken('my-app-token')->plainTextToken;
            $response = [
                'user' =>$user,
                'token'=>$token
            ];
            return response($response , 201);
        }

    }
}
