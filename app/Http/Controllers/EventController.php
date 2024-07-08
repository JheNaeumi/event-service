<?php

namespace App\Http\Controllers;
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    //TODO: Conroller using React FrontEnd
    public function index(){
        $event = Event::query() -> where('user_id', request()->user()->id) -> orderBy("created_at","desc")->paginate();
    }
    public function store(Request $request){


    }
    public function show($id){

    }
    public function edit($id){
    
    }
    public function update(Request $request, $id){
    
    }
    public function destroy($id){
    
    }
    
}
