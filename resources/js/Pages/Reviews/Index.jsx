import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';
import Review from '@/Components/Review';
import { useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import Modal from '@/Components/Modal';

export default function Index({ auth, message }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
        rating: '',
    });

    const [selected, setSelected] = useState('⭐⭐⭐⭐⭐');

    const submit = (e) => {
        e.preventDefault();
        post(route('reviews.store'), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Reviews" />

            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <textarea
                        value={data.message}
                        placeholder="What's on your mind?"
                        className="block w-full bg-gray-400 text-white border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('message', e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} className="mt-2" />
                    <label htmlFor="rating" className="block my-5 text-sm font-medium text-gray-900 dark:text-white">Give us a Rating</label>
                    <select
                        id='rating'
                        name="rating"
                        value={selected} 
                        onChange={e => {setData('rating',e.target.value); setSelected(e.target.value)}}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                        <option value="⭐">⭐</option>
                        <option value="⭐⭐">⭐⭐</option>
                        <option value="⭐⭐⭐">⭐⭐⭐</option>
                        <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                        <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
                    </select>
                    <InputError message={errors.rating} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>Post</PrimaryButton>
                </form>
                <h1 className="text-2xl text-primary-400 font-bold my-10">Latest Reviews</h1>
                <div className="mt-6 bg-gray-700 shadow-sm rounded-lg divide-y">
                    {message.map(review =>
                        <Review key={review.id} review={review} />
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
