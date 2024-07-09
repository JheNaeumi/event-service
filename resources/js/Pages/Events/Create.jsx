import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function Create() {
    const { post, setData, data, errors } = useForm({
        title: '',
        description: '',
        event_date: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('events.store'));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={data.title}
                    onChange={e => setData('title', e.target.value)}
                />
                {errors.title && <div>{errors.title}</div>}
            </div>
            <div>
                <label>Description</label>
                <textarea
                    value={data.description}
                    onChange={e => setData('description', e.target.value)}
                />
                {errors.description && <div>{errors.description}</div>}
            </div>
            <div>
                <label>Event Date</label>
                <input
                    type="datetime-local"
                    value={data.event_date}
                    onChange={e => setData('event_date', e.target.value)}
                />
                {errors.event_date && <div>{errors.event_date}</div>}
            </div>
            <button type="submit">Create Event</button>
        </form>
    );
}
