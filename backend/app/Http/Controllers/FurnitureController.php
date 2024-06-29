<?php

namespace App\Http\Controllers;

use App\Models\Furniture;
use App\Models\FurnitureImage;
use App\Models\Order;
use Illuminate\Http\Request;

class FurnitureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories=Furniture::with('images')->with('city')->get();
        return response()->json(['status'=>true,'message'=>'','data'=>$categories]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function get_one($id)
    {
        $categories=Furniture::with('images')->with('city')->where('category_id',$id)->get();
        return response()->json(['status'=>true,'message'=>'','data'=>$categories]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(['name'=>'required']);
        $furniture=new Furniture();
        $furniture->name=$request->name;
        $furniture->description=$request->description;
        $furniture->status=$request->status;
        $furniture->rent=$request->rent;
        $furniture->category_id=$request->category_id;
        $furniture->city_id=$request->city_id;
        $furniture->user_id=auth()->user()->id;
        $furniture->save();
        if($request->hasFile('image')){
            $files=$request->file('image');
            foreach($files as $file){

                $fs=new FurnitureImage();
                $fs->furniture_id=$furniture->id;
                $fs->image='storage/'.$file->store('furniture');
                $fs->save();
            }
        }
        return response()->json(['status'=>true,'message'=>'furniture created','data'=>$furniture]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Furniture $furniture)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Furniture $furniture)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Furniture $furniture)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Furniture $furniture)
    {
        $furniture->images()->delete();
        $furniture->delete();
        return response()->json(['status'=>true,'message'=>'furniture deleted','data'=>$furniture]);
    }
    public function get_bookings(Request $request){
        $orders=Order::with('furniture')->get();
        return response()->json(['status'=>true,'data'=>$orders]);
    }
}
