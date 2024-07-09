<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::orderBy('event_date', 'desc')->paginate();
        return inertia('Event/Index', ['events' => $events]);
    }

    public function create()
    {
        return inertia('Event/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'event_date' => 'required|date',
        ]);
        $data['user_id'] = $request->user()->id;
        $event = Event::create($data);

        // Send initial email notification
        // Notification logic here

        return redirect()->route('events.show', $event)->with('message', 'Event created successfully.');
    }

    public function show(Event $event)
    {
        return inertia('Event/Show', ['event' => $event]);
    }

    public function edit(Event $event)
    {
        return inertia('Event/Edit', ['event' => $event]);
    }

    public function update(Request $request, Event $event)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'event_date' => 'required|date',
        ]);

        $event->update($data);

        // Send update email notification
        // Notification logic here

        return redirect()->route('events.show', $event)->with('message', 'Event updated successfully.');
    }

    public function destroy(Event $event)
    {
        $event->delete();
        return redirect()->route('events.index')->with('message', 'Event deleted successfully.');
    }

    public function join(Event $event)
    {
        $user = auth()->user();
        // Attach the user to the event (many-to-many relationship or custom logic)
        // Notification logic here

        return redirect()->route('events.show', $event)->with('message', 'You have joined the event.');
    }
}
