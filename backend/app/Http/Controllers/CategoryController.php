<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories=Category::all();
        return response()->json(['status'=>true,'message'=>'','data'=>$categories]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate(['name'=>'required']);
        $category=new Category();
        $category->name=$request->name;
        if($request->hasFile('image')){
            $file=$request->file('image');
            if($file->isValid()){
            $category->image='storage/'.$file->store('category');
            }
        }
        $category->save();
        return response()->json(['status'=>true,'message'=>'category created','data'=>$category]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        return view("admin.categories.edit",['category'=>$category]);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        $category->name=$request->name;
        if($request->hasFile('image')){
            $file=$request->file('image');
            if($file->isValid()){
                $category->image='storage/'.$file->store('category');
            }
        }
        $category->save();
        return response()->json(['status'=>true,'message'=>'category updated','data'=>$category]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return response()->json(['status'=>true,'message'=>'category deleted','data'=>$category]);
        // if(!count($category->furnitures)){
        //     return response()->json(['status'=>true,'message'=>'category deleted','data'=>$category]);
        // }
        // return response()->json(['status'=>true,'message'=>"Category has talks. Can't Delete"]);
    }
}
