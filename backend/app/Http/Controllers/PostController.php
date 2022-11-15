<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::all();
        return $posts;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'predmet_id' => 'required',
            'sadrzaj' => 'required',
            'datoteka',
            'user_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $post = Post::create([
            'predmet_id' => request('predmet_id'),
            'sadrzaj' => request('sadrzaj'),
            'datoteka' => request('datoteka'),
            'user_id' => Auth::user()->id
        ]);

        return response()->json(['Post created successfully.', new PostResource($post)]);
    }

    /**
     * Display the specified resource.
     *u
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        return new PostResource($post);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $post = Post::find($id);
        if($post){
            return response()->json([
                'post' => $post,
            ]);
        }else{
            return response()->json([
                'message' => 'Nije pronadjen materijal.'
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'predmet_id' => 'required',
            'sadrzaj' => 'required',
            'datoteka',
            'user_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator -> messages()
            ]);
    }else{
        $post = Post::find($id);
        if($post){
            $post->predmet_id =$request->input('predmet_id');
            $post->sadrzaj =$request->input('sadrzaj');
            $post->datoteka =$request->input('datoteka');
            $post->user_id =$request->input('user_id');
            $post->update();

            return response()->json([
                'message' => 'Materijal je uspesno izmenjen.',
            ]);
        }else{
            return response()->json([
                'message' => 'Nije pronadjen materijal.'
            ]);
        }
    }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy($post_id)
    {
        $post = Post::find($post_id);
        $success = $post->delete();
        return [
            'success' => $success,
        ];
    }

    public function getPost($post_id){
        $post = Post::find($post_id);
        return $post;
    }
    
}
