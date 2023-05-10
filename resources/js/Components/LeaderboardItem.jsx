// Components/LeaderboardItem.jsx
function LeaderboardItem({ rank, username, wpm, accuracy }) {
    return (
        <div className="p-4 flex items-center justify-between">
            <div className="flex items-center">
                <span className="text-xl font-bold mr-4">{rank}</span>
                <span>{username}</span>
            </div>
            <div>
                <span className="text-xl font-bold mr-4">{wpm} WPM</span>
                <span className="text-xl font-bold">{accuracy}% Accuracy</span>
            </div>
        </div>
    );
}

export default LeaderboardItem;
