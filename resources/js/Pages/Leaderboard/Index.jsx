import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Leaderboard from '@/Components/Leaderboard';

export default function Index({ auth, leaderboardData }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Leaderboard" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <h1 className="text-2xl font-bold">Leaderboard</h1>
                <Leaderboard leaderboardData={leaderboardData} />
            </div>
        </AuthenticatedLayout>
    );
}
