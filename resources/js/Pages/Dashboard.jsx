
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard({ auth, events }) {
    const [expandedEvent, setExpandedEvent] = useState(null);

    const toggleEventDetails = (eventId) => {
        setExpandedEvent(expandedEvent === eventId ? null : eventId);
    };
    
    const upcomingEvents = events
    .filter(event => new Date(event.event_date) >= new Date()) // Filter out past events
    .sort((a, b) => new Date(a.event_date) - new Date(b.event_date)) // Sort by date
    
    const passedEvents = events
    .filter(event => new Date(event.event_date) < new Date())
    .sort((a, b) => new Date(a.event_date) - new Date(b.event_date))

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-lg font-medium mb-4">Active Events</h3>
                            {events.length === 0 ? (
                                <p>You haven't created any events yet.</p>
                            ) : (
                                <div>
                                    <div className="space-y-4">
                                        {upcomingEvents.map((event) => (
                                            <div key={event.id} className="border rounded-lg p-4">
                                                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleEventDetails(event.id)}>
                                                    <h4 className="text-xl font-semibold">{event.name}</h4>
                                                    <span className="text-sm bg-blue-500 text-white px-2 py-1 rounded">
                                                        {event.users.length} {event.users.length === 1 ? 'user' : 'users'} joined
                                                    </span>
                                                </div>
                                                {expandedEvent === event.id && (
                                                    <div className="mt-4">
                                                        <h5 className="font-medium mb-2">Users who joined:</h5>
                                                        {event.users.length === 0 ? (
                                                            <p>No users have joined this event yet.</p>
                                                        ) : (
                                                            <ul className="list-disc pl-5">
                                                                {event.users.map((user) => (
                                                                    <li key={user.id}>{user.name}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <h3 className="text-lg font-medium mb-4  my-4">Passed Events</h3>
                                    <div className="space-y-4">
                                        {passedEvents.map((event) => (
                                            <div key={event.id} className="border rounded-lg p-4">
                                                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleEventDetails(event.id)}>
                                                    <h4 className="text-xl font-semibold">{event.name}</h4>
                                                    <span className="text-sm bg-blue-500 text-white px-2 py-1 rounded">
                                                        {event.users.length} {event.users.length === 1 ? 'user' : 'users'} joined
                                                    </span>
                                                </div>
                                                {expandedEvent === event.id && (
                                                    <div className="mt-4">
                                                        <h5 className="font-medium mb-2">Users who joined:</h5>
                                                        {event.users.length === 0 ? (
                                                            <p>No users have joined this event yet.</p>
                                                        ) : (
                                                            <ul className="list-disc pl-5">
                                                                {event.users.map((user) => (
                                                                    <li key={user.id}>{user.name}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                              
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}