import { useState } from 'react';
import Card from '@/Components/Card';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { formatDistanceToNow } from 'date-fns';
import React from 'react';
import { TbWorld } from "react-icons/tb";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import SwitchButton from '@/Components/SwitchButton';

const avatar = "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg";

export default function Index({
    auth,
    user,
    stats,
    total_test,
    average_wpm,
    average_accuracy,
    average_error,
    max_time,
    max_typed,
    reviews,
    all_tests,
    country,
    world_average_accuracy,
    world_average_wpm,
    world_average_error
}) {

    const [openChart, setOpenChart] = useState(true);

    const data = [
        {
            name: 'Average WPM',
            uv: world_average_wpm,
            pv: average_wpm,
            amt: average_wpm,
        },
        {
            name: 'Average Error',
            uv: world_average_error,
            pv: average_error,
            amt: average_error,
        },
        {
            name: 'Average Accuracy',
            uv: world_average_accuracy,
            pv: average_accuracy,
            amt: average_accuracy,
        },
        {
            name: 'Total Typed',
            uv: 1000,
            pv: max_typed,
            amt: max_typed,
        },
    ]

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={`${user.name} Stats`} />

            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <h1 className="text-2xl text-primary-400 font-bold mb-10">{user.name} Stats</h1>
                <Card className="grid grid-cols-4 text-center mb-10">
                    <div className='grid grid-cols-2 gap-0'>
                        <img src={avatar} className='w-20 h-20 rounded-full' alt="" />
                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-primary-400 font-bold'>{user.name} {country}</p>
                            <p className='text-lg text-slate-400'>Joined {formatDistanceToNow(new Date(user.created_at))}</p>
                            <div>
                                {
                                    user.website && <a href={user.website} className='text-lg text-slate-400'><TbWorld /></a>
                                }
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className='text-primary-400 font-bold'>Test Completed</p>
                        {
                            total_test ? <p className='text-lg text-slate-400'>{total_test}</p> : <p className='text-lg text-slate-400'>0</p>
                        }

                    </div>

                    <div>
                        <p className='text-primary-400 font-bold'>Time Typing</p>
                        {
                            max_time ? <p className='text-lg text-slate-400'>{max_time}</p> : <p className='text-lg text-slate-400'>0</p>
                        }
                    </div>

                    <div>
                        <p className='text-primary-400 font-bold'>Reviews Posted</p>
                        {
                            reviews ? <p className='text-lg text-slate-400'>{reviews}</p> : <p className='text-lg text-slate-400'>0</p>
                        }
                    </div>
                </Card>
                <Card className="grid grid-cols-4 mb-10 text-center">
                    <div>
                        <p className='text-primary-400 font-bold'>Bio</p>
                        {
                            user.bio ? <p className='text-lg text-slate-400'>{user.bio}</p> : <p className='text-lg text-slate-400'>No bio yet</p>
                        }
                    </div>

                    <div>
                        <p className='text-primary-400 font-bold'>Keyboard</p>
                        {
                            user.keyboard ? <p className='text-lg text-slate-400'>{user.keyboard}</p> : <p className='text-lg text-slate-400'>No keyboard has been added</p>
                        }
                    </div>

                    <div>
                        <p className='text-primary-400 font-bold'>Twiiter</p>
                        {
                            user.twitter ? <a href={`https://twitter.com/${user.twitter}`} className='text-lg text-slate-400'>{user.twitter}</a> : <p className='text-lg text-slate-400'>No twitter has been added</p>
                        }
                    </div>

                    <div>
                        <p className='text-primary-400 font-bold'>GitHub</p>
                        {
                            user.github ? <a href={`https://github.com/${user.github}`} className='text-lg text-slate-400'>{user.github}</a> : <p className='text-lg text-slate-400'>No github has been added</p>
                        }
                    </div>
                </Card>
                <SwitchButton label={openChart ? `Switch to Simple` : `Switch to Chart`} onChange={() => setOpenChart(!openChart)} className={'mb-10'} />
                <div className='grid grid-cols-1 gap-4 text-center'>
                    {openChart &&
                        <Card className="flex flex-row justify-center mb-10">
                            <LineChart
                                width={1000}
                                height={500}
                                data={data}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="uv" display={'World Record'} stroke="#82ca9d" />
                            </LineChart>
                        </Card>
                    }

                    {
                        !openChart && <Card className="grid grid-cols-4 mb-10">
                            <div>
                                <p className='text-primary-400 font-bold'>Average WPM</p>
                                {average_wpm ? <p className='text-lg text-slate-400'>{average_wpm.toFixed(1)}</p> : <p className='text-lg text-slate-400'>0</p>}
                            </div><div>
                                <p className='text-primary-400 font-bold'>Average Error</p>
                                {average_error ? <p className='text-lg text-slate-400'>{average_error.toFixed(1)}</p> : <p className='text-lg text-slate-400'>0</p>}
                            </div><div>
                                <p className='text-primary-400 font-bold'>Average Accuracy</p>
                                {average_accuracy ? <p className='text-lg text-slate-400'>{average_accuracy.toFixed(1)}</p> : <p className='text-lg text-slate-400'>0</p>}
                            </div><div>
                                <p className='text-primary-400 font-bold'>Total typed</p>
                                {max_typed ? <p className='text-lg text-slate-400'>{max_typed}</p> : <p className='text-lg text-slate-400'>0</p>}
                            </div>
                        </Card>
                    }
                </div>

                <div>
                    <h1 className='text-primary-400 mb-10 text-2xl font-bold'>{user.name} Previous 10 Test Stats</h1>
                    <Card className='grid grid-cols-7 gap-2 text-center text-2xl text-primary-400 mb-10'>
                        <p>WPM</p>
                        <p>Accuracy</p>
                        <p>Error</p>
                        <p>Typed</p>
                        <p>Time</p>
                        <p>Word Type</p>
                        <p>Date</p>
                    </Card>
                    {all_tests.map(test => (
                        <Card
                            key={test.id}
                            className='grid grid-cols-7 gap-2 text-center text-lg text-slate-400 mb-4'
                        >
                            <p>{test.wpm}</p>
                            <p>{test.accuracy}</p>
                            <p>{test.error}</p>
                            <p>{test.typed}</p>
                            <p>{test.time}</p>
                            <p>{test.language}</p>
                            <p>{formatDistanceToNow(new Date(test.created_at))}</p>
                        </Card>
                    ))}
                </div>

            </div>
        </AuthenticatedLayout>
    );
}
