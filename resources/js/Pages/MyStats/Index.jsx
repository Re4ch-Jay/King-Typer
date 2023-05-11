import Card from '@/Components/Card';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import dayjs from 'dayjs';

const avatar = "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg";

export default function Index({
    auth,
    total_test,
    average_wpm,
    average_accuracy,
    average_error,
    max_time,
    max_typed,
    reviews
}) {

    console.log(dayjs(auth.user.created_at).date())

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="My Stats" />

            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <h1 className="text-2xl text-primary-400 font-bold mb-10">My Stats</h1>
                <Card className="grid grid-cols-4">
                    <div className='grid grid-cols-2 gap-0'>
                        <img src={avatar} className='w-20 h-20 rounded-full' alt="" />
                        <div>
                            <p>{auth.user.name}</p>
                            <p>Joined {dayjs(auth.user.created_at).date()} days</p>
                        </div>
                    </div>

                    <div>
                        <p>Test Completed</p>
                        <p>{total_test}</p>
                    </div>

                    <div>
                        <p>Time Typing</p>
                        <p>{max_time}</p>
                    </div>

                    <div>
                        <p>Reviews Posted</p>
                        <p>{reviews}</p>
                    </div>
                </Card>
                <div className='grid grid-cols-1 gap-4'>
                    <Card className="grid grid-cols-4">
                        <div>
                            <p>Average WPM</p>
                            <p>{average_wpm.toFixed(1)}</p>
                        </div>

                        <div>
                            <p>Average Error</p>
                            <p>{average_error.toFixed(1)}</p>
                        </div>

                        <div>
                            <p>Average Accuracy</p>
                            <p>{average_accuracy.toFixed(1)}</p>
                        </div>

                        <div>
                            <p>Total typed</p>
                            <p>{max_typed}</p>
                        </div>
                    </Card>

                    {/* <Card className="grid grid-cols-3">
                        <div>
                            <p>15 Seconds</p>
                            <p>2023</p>
                        </div>

                        <div>
                            <p>30 Seconds</p>
                            <p>123</p>
                        </div>

                        <div>
                            <p>60 Seconds</p>
                            <p>123</p>
                        </div>
                    </Card> */}

                </div>
            </div>


        </AuthenticatedLayout>
    );
}
