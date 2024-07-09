import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function Index({ events }) {
    const { auth } = usePage().props;

    return (
        <div>
            <h1>Events</h1>
            {auth.user && (
                <Link href={route('events.create')}>Create New Event</Link>
            )}
            <ul>
                {events.data.map(event => (
                    <li key={event.id}>
                        <Link href={route('events.show', event.id)}>
                            {event.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
