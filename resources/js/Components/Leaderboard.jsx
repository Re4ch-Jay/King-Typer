import LeaderboardItem from '@/Components/LeaderboardItem';

function Leaderboard({ leaderboardData }) {
    return (
        <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
            {leaderboardData.map((item, index) => (
                <LeaderboardItem
                    key={item.id}
                    rank={index + 1}
                    username={item.username}
                    wpm={item.wpm}
                    accuracy={item.accuracy}
                />
            ))}
        </div>
    );
}

export default Leaderboard;
