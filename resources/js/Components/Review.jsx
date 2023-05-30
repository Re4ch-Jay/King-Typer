import React, { useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useForm, usePage } from '@inertiajs/react';

dayjs.extend(relativeTime);
export default function Review({ review }) {
    const { auth } = usePage().props;

    const [editing, setEditing] = useState(false);
    const [selected, setSelected] = useState('⭐⭐⭐⭐⭐');

    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        message: review.message,
        rating: review.rating,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('reviews.update', review.id), { onSuccess: () => setEditing(false) });
    };

    return (
        <div className="rounded-md p-6 flex space-x-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white -scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <div>
                            <span className="text-white font-bold">{review.user.name}</span>
                            <small className="ml-2 text-sm text-white">{dayjs(review.created_at).fromNow()}</small>
                            {review.created_at !== review.updated_at && <small className="text-sm text-white"> &middot; edited</small>}
                        </div>
                        <span className="text-white font-bold">{review.rating}</span>
                    </div>
                    {review.user.id === auth.user.id &&
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <button className="block w-full px-4 py-2 text-left text-sm leading-5 text-white hover:bg-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out" onClick={() => setEditing(true)}>
                                    Edit
                                </button>
                                <Dropdown.Link as="button" href={route('reviews.destroy', review.id)} method="delete">
                                    Delete
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    }
                </div>
                {editing
                    ? <form onSubmit={submit}>
                        <textarea value={data.message} onChange={e => setData('message', e.target.value)} className="mt-4 w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"></textarea>
                        <InputError message={errors.message} class="mt-2" />
                        <label for="rating" className="block my-5 text-sm font-medium text-gray-900 dark:text-white">Give us a Rating</label>
                        <select
                            id='rating'
                            name="rating"
                            value={data.rating} 
                            onChange={e => {setData('rating',e.target.value); setSelected(e.target.value)}}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                            <option value="⭐">⭐</option>
                            <option value="⭐⭐">⭐⭐</option>
                            <option value="⭐⭐⭐">⭐⭐⭐</option>
                            <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                            <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
                        </select>
                        <InputError message={errors.rating} className="mt-2" />
                        <div className="space-x-2">
                            <PrimaryButton className="mt-4">Save</PrimaryButton>
                            <button className="mt-4" onClick={() => { setEditing(false); reset(); clearErrors(); }}>Cancel</button>
                        </div>
                    </form>
                    : <p className="mt-4 text-lg text-white">{review.message}</p>
                }
            </div>
        </div>
    );
}
