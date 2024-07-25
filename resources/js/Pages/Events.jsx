
import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Event({ auth, events }) {
    const { data, setData, post, processing, errors, delete: destroy } = useForm({
        name: '',
        description: '',
        event_date: '',
    });

    const [expandedEvent, setExpandedEvent] = useState(null);
    const hasUserJoined = (event) => {
        return event.users.some(user => user.id === auth.user.id);
    };

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('events.store'), {
            onSuccess: () => {
                setData({ name: '', description: '', event_date: '' });
            },
        });
    };

    const handleJoin = (id) => {
        post(route('events.join', id));
    };

    const handleDelete = (id) => {
        destroy(route('events.destroy', id));
    };

    const toggleEventDetails = (eventId) => {
        setExpandedEvent(expandedEvent === eventId ? null : eventId);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Events</h2>}
        >
            <Head title="Events" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-lg font-medium mt-2 mb-4">Create New Event</h3>
                                <form onSubmit={handleSubmit} className="space-y-4 mb-4">
                                    <div>
                                        <label className="block text-gray-700 dark:text-gray-300">Name</label>
                                        <input type="text" name="name" value={data.name} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required />
                                        {errors.name && <div className="text-red-500 mt-2">{errors.name}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 dark:text-gray-300">Description</label>
                                        <textarea name="description" value={data.description} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required />
                                        {errors.description && <div className="text-red-500 mt-2">{errors.description}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 dark:text-gray-300">Event Date</label>
                                        <input type="datetime-local" name="event_date" value={data.event_date} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required />
                                        {errors.event_date && <div className="text-red-500 mt-2">{errors.event_date}</div>}
                                    </div>
                                    <div>
                                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors" disabled={processing}>Create Event</button>
                                    </div>
                                </form>
                            <h3 className="text-lg font-medium mt-8 mb-4">Event List</h3>
                                {events.length === 0 ? (
                                    <p>No events available.</p>
                                ) : (
                                    <ul className="space-y-4">
                                        {events.map(event => (
                                            <li key={event.id} className="border rounded-lg p-4">
                                                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleEventDetails(event.id)}>
                                                    <div>
                                                        <div className="font-bold text-xl">{event.name}</div>
                                                        <div className="text-sm text-gray-500">{new Date(event.event_date).toLocaleString()}</div>
                                                    </div>
                                                    <span className="text-sm bg-blue-500 text-white px-2 py-1 rounded">
                                                        {event.users.length} {event.users.length === 1 ? 'user' : 'users'} joined
                                                    </span>
                                                </div>
                                                <div className="mt-2">{event.description}</div>
                                                {expandedEvent === event.id && auth.user.id === event.user_id && (
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
                                                <div className="mt-4 space-x-2">
                                                    {auth.user && auth.user.id !== event.user_id && (
                                                            hasUserJoined(event) ? (
                                                                <button 
                                                                    className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed" 
                                                                    disabled
                                                                >
                                                                    Joined
                                                                </button>
                                                            ) : (
                                                                <button 
                                                                    onClick={() => handleJoin(event.id)} 
                                                                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                                                                >
                                                                    Join
                                                                </button>
                                                            )
                                                    )}
                                                    {auth.user && auth.user.id === event.user_id && (
                                                        <button onClick={() => handleDelete(event.id)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
                                                    )}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}