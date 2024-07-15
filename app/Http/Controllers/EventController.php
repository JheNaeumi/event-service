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
        $event = Event::create($request->all());
        return redirect()->route('events');
    }

    public function show(Event $event): Response
    {
        return inertia('Events', ['event' => $event]);
    }

    public function update(Request $request, Event $event)
    {
        $event->update($request->all());
        return redirect()->route('events');
    }

    public function destroy(Event $event)
    {
        $event->delete();
        return redirect()->route('events');
    }
}
