import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
// Components/LeaderboardItem.jsx
function LeaderboardItem({ rank, username, wpm, accuracy, country }) {
    const initial = { opacity: 0 };
    const animate = { opacity: 1 };
    return (
        <motion.div
            initial={initial}
            animate={animate}
            className="p-4 flex items-center justify-between">
            <div className="flex items-center">
                <span className="text-xl text-slate-400 font-bold mr-4">{rank}</span>
                <Link href={route('profile.index', username)} className="text-slate-100 text-xl hover:text-slate-400">{username} {country}</Link>
            </div>
            <div>
                <span className="text-xl text-slate-100 font-bold mr-4">{wpm} WPM</span>
                <span className="text-xl text-slate-100 font-bold">{accuracy} Accuracy</span>
            </div>
        </motion.div>
    );
}

export default LeaderboardItem;
