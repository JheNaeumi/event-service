<?php
namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Response;

class EventController extends Controller
{
    public function index(): Response
    {
        $events = Event::all();
        return inertia('Events', ['events' => $events]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'event_date' => 'required|date',
        ]);
    
        Event::create([
            'name' => $request->name,
            'description' => $request->description,
            'event_date' => $request->event_date,
            'user_id' => auth()->id(), // Assign the authenticated user
        ]);
    
        return redirect()->route('events');
    }

    public function show(Event $event): Response
    {
        return inertia('Events', ['event' => $event]);
    }

    public function update(Request $request, Event $event)
    {
        if ($event->user_id !== auth()->id()) {
            abort(403);
        }
    
        $event->update($request->all());
        return redirect()->route('events');
    }
    
    public function destroy(Event $event)
    {
        if ($event->user_id !== auth()->id()) {
            abort(403);
        }
    
        $event->delete();
        return redirect()->route('events');
    }
    

    public function join(Event $event)
    {
        if (auth()->user()) {
            $event->users()->attach(auth()->id());
            return redirect()->route('events');
        }

        return redirect()->route('login');
    }

   


}
