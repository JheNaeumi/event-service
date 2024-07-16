import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';


export default function Event({ auth, events }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        event_date: '',
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('events.store'), {
            onSuccess: () => {
                setData({ name: '', description: '', event_date: '', });
            },
        });
    };

    const handleJoin = (id) => {
       post(route('events.join', id));
    };

    const handleDelete = (id) => {
        destroy(route('events.destroy', id));
    };

    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Events</h2>}
            >
                <Head title="Events" />
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <h3 className="text-lg font-medium">Event List</h3>
                                <ul>
                                    {events.map(event => (
                                        <li key={event.id} className="mt-4">
                                            <div className="font-bold">{event.name}</div>
                                            <div>{event.description}</div>
                                            <div>{new Date(event.event_date).toLocaleString()}</div>
        
                                            {auth.user && (
                                                <button onClick={() => handleJoin(event.id)} className="bg-green-500 text-white px-4 py-2 rounded mt-2">Join</button>
                                            )}
                                            {auth.user && auth.user.id === event.user_id && (
                                                <>
                                                    <button onClick={() => handleDelete(event.id)} className="bg-red-500 text-white px-4 py-2 rounded mt-2 ml-4">Delete</button>
                                                    {/* Add an update button and form if needed */}
                                                </>
                                            )}
                                        

                                        </li>
                                    ))}
                                </ul>

                                <h3 className="text-lg font-medium mt-8">Create New Event</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="mt-4">
                                        <label className="block text-gray-700">Name</label>
                                        <input type="text" name="name" value={data.name} onChange={handleChange} className="mt-1 block w-full text-gray-600" required />
                                        {errors.name && <div className="text-red-500 mt-2">{errors.name}</div>}
                                    </div>
                                    <div className="mt-4">
                                        <label className="block text-gray-700">Description</label>
                                        <textarea name="description" value={data.description} onChange={handleChange} className="mt-1 block w-full  text-gray-600" required />
                                        {errors.description && <div className="text-red-500 mt-2">{errors.description}</div>}
                                    </div>
                                    <div className="mt-4">
                                        <label className="block text-gray-700">Event Date</label>
                                        <input type="datetime-local" name="event_date" value={data.event_date} onChange={handleChange} className="mt-1 block w-full  text-gray-600" required />
                                        {errors.event_date && <div className="text-red-500 mt-2">{errors.event_date}</div>}
                                    </div>
                                    <div className="mt-4">
                                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={processing}>Create Event</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
