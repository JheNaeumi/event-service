<?php
namespace App\Http\Controllers;

use App\Models\Event;
use App\Notifications\EventJoinedNotification;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{

    public function index()
    {
        $events = Event::with('users:id,name')->get();
        return Inertia::render('Events', [
            'events' => $events
        ]);
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
        return Inertia::render('Events', ['event' => $event]);
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
    public function join($id)
    {
        // Check if the user is authenticated
        if (!Auth::check()) {
            // If not authenticated, redirect to login page with a message
            return redirect()->route('login')->with('message', 'Please log in to join an event.');
        }

        $event = Event::findOrFail($id);

        // Check if the user has already joined the event
        if ($event->users()->where('user_id', auth()->id())->exists()) {
            // If already joined, redirect back with a message
            return redirect()->back()->with('message', 'You have already joined this event.');
        }

        // If not joined, attach the user to the event
        $event->users()->attach(auth()->id());
        auth()->user()->notify(new EventJoinedNotification($event));

        return redirect()->route('events')->with('message', 'You have successfully joined the event.');
    }

    public function dashboard()
    {
        $events = Event::where('user_id', auth()->id())
            ->with('users:id,name')
            ->get();
        
        return Inertia::render('Dashboard', [
            'events' => $events
        ]);
    }
    
    public function welcome()
    {
        $events = Event::with('users')->where('event_date', '>', now())->get();
        return Inertia::render('Welcome', [
            'events' => $events,
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

}
