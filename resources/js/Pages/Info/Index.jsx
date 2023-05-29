import Authenticated from '@/Layouts/AuthenticatedLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestMainLayout from '@/Layouts/GuestMainLayout';
import { Head } from '@inertiajs/react';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Index({
    auth,
    users_count,
    tests_count,
    reviews_count,
    total_time,
    total_typed,
    average_accuracy,
    average_wpm,
    average_error,
}) {

    const data = [
        {
            name: 'Total Time',
            uv: total_time,
            pv: total_time,
            amt: 2400,
        },
        {
            name: 'Total Typed',
            uv: total_typed,
            pv: total_typed,
            amt: 2210,
        },
        {
            name: 'Average Accuracy',
            uv: average_accuracy,
            pv: average_accuracy,
            amt: 2290,
        },
        {
            name: 'Average WPM',
            uv: average_wpm,
            pv: average_wpm,
            amt: 2000,
        },
        {
            name: 'Average Error',
            uv: average_error,
            pv: average_error,
            amt: 2181,
        },
        {
            name: 'Total Completed Test',
            uv: tests_count,
            pv: tests_count,
            amt: 2500,
        }
    ];

    return (
        <Authenticated user={auth.user}>
            <Head title="Info" />
            <div className='my-20'>
                <p className='text-center text-gray-400 text-lg font-medium'>
                    Created with love by King-Typer Team.
                </p>
                <p className='text-center text-gray-400 text-lg font-medium'>
                    Supported and expanded by many awesome people.
                </p>
                <p className='text-center text-gray-400 text-lg font-medium'>
                    Launched on 15th of May, 2023
                </p>
            </div>

            <div className='grid grid-cols-3 gap-3 justify-items-center'>
                <div className='text-center text-lg'>
                    <p className='text-gray-400'>Total users joined</p>
                    {
                        users_count ? <p className='text-gray-100 text-7xl'>{users_count}</p> : <p className='text-gray-100 text-7xl'>0</p>
                    }

                </div>
                <div className='text-center text-lg'>
                    <p className='text-gray-400'>Total tests started</p>
                    {
                        tests_count ? <p className='text-gray-100 text-7xl'>{tests_count}</p> : <p className='text-gray-100 text-7xl'>0</p>

                    }

                </div>
                <div className='text-center text-lg'>
                    <p className='text-gray-400'>Total reviews</p>
                    {
                        reviews_count ? <p className='text-gray-100 text-7xl'>{reviews_count}</p> : <p className='text-gray-100 text-7xl'>0</p>
                    }

                </div>
            </div>

            <div className='grid grid-cols-1 justify-items-center'>
                <BarChart
                    width={1500}
                    height={350}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    <YAxis yAxisId="right" orientation="right" stroke="#FACC15" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="right" dataKey="uv" fill="#FACC15" />
                </BarChart>
            </div>

        </Authenticated>
    );
}
