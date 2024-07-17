<?php
namespace App\Http\Controllers;

use App\Models\Event;
use App\Notifications\EventReminder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;

class EventController extends Controller
{
    // public function index(): Response
    // {
    //     $events = Event::all();
    //     return inertia('Events', ['events' => $events]);
    // }

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

    // public function show(Event $event): Response
    // {
    //     return inertia('Events', ['event' => $event]);
    // }

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
    

    // public function join(Event $event)
    // {
    //     if (auth()->user()) {
    //         $event->users()->attach(auth()->id());
    //         return redirect()->route('events');
    //     }

    //     return redirect()->route('login');
    // }

    // public function join($id)
    // {
    //     $event = Event::findOrFail($id);
    
    //     if (!$event->users()->where('user_id', auth()->id())->exists()) {
    //         $event->users()->attach(auth()->id());
    //     }
    
    //     return redirect()->route('events.index');
    // }
    public function join($id)
    {
        $event = Event::findOrFail($id);

        if (!$event->users()->where('user_id', auth()->id())->exists()) {
            $event->users()->attach(auth()->id());
            auth()->user()->notify(new EventReminder($event));
        }

        return redirect()->route('events.index');
    }

    public function show(Event $event)
    {
        $event->load('users');
    
        return inertia('Events', [
            'event' => $event,
        ]);
    }
    
    public function index()
    {
        $events = Event::with('users')->get();
        return inertia('Events', [
            'auth' => Auth::user(),
            'events' => $events,
        ]);
    }

    public function dashboard()
    {
        $events = Event::with('users')->where('user_id', auth()->id())->get();
        return inertia('Dashboard', [
            'auth' => Auth::user(),
            'events' => $events,
        ]);
    }



}
