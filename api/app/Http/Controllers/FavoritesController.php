<?php
namespace App\Http\Controllers;

use App\Models\Favorites;
use Illuminate\Http\Request;
class FavoritesController extends Controller{
    public function getData(){
        return Favorites::all();
        // return Favorites::select('word')->where(auth()->id())->get();

    }
    public function store(Request $request){
        // $request->validator([
        //     'word'=>'required|max:191',
        //     'user_id'=>'required|max:191'
        // ]);
    $favorite = new Favorites;
    $favorite->word =$request->word;
    $favorite->user_id =$request->user_id;
    $favorite->save();
    return response()->json(['message'=>'Word Added successfully '],200);

    }
    public function delete($id){
        $favorite = Favorites::find($id);
        $favorite->delete();
        return response()->json(['message'=>'Word Deleted successfully '],200);
    }
}
