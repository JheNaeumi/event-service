import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function Show({ event }) {
    const { auth } = usePage().props;

    return (
        <div>
            <h1>{event.title}</h1>
            <p>{event.description}</p>
            <p>{new Date(event.event_date).toLocaleString()}</p>
            {auth.user ? (
                <>
                    <Link href={route('events.edit', event.id)}>Edit</Link>
                    <form
                        method="POST"
                        action={route('events.destroy', event.id)}
                        onSubmit={(e) => {
                            e.preventDefault();
                            if (confirm('Are you sure?')) {
                                e.target.submit();
                            }
                        }}
                    >
                        <button type="submit">Delete</button>
                    </form>
                    <form method="POST" action={route('events.join', event.id)}>
                        <button type="submit">Join Event</button>
                    </form>
                </>
            ) : (
                <Link href={route('login')}>Login to join this event</Link>
            )}
        </div>
    );
}
