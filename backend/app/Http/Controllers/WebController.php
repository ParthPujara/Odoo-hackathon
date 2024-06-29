<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Furniture;
use Illuminate\Http\Request;

class WebController extends Controller
{
    public function getCat(){
        $categories=Category::all();
        return response()->json(['status'=>true,'message'=>'','data'=>$categories]);
    }
    public function homepage(Request $request){
        $cats=Category::all();
        return view('homepage',compact('cats'));
    }
    public function listing(Request $request,$id){
        $category=Category::find($id);
        $furnitures=$category->furnitures;
        return view('listingPage',compact('category','furnitures'));
    }
    public function rentItem($id){
        $item=Furniture::find($id);
        $today=date("Y-m-d",strtotime("tomorrow"));
        $tommorow=date("Y-m-d",strtotime("tomorrow + 1 day"));
        return view('rentItem',compact('item','today','tommorow'));
    }
}
