import React from 'react'
import { motion } from 'framer-motion'

export const WordTypeModal = ({ setOpenModal, handleWordTypes }) => {

    const options = [
        { range: 1, displays: "city" },
        { range: 2, displays: "name" },
        { range: 3, displays: "animal" },
        { range: 4, displays: "commerce" },
        { range: 5, displays: "company" },
        { range: 6, displays: "lorem" },
        { range: 7, displays: "music" },
        { range: 8, displays: "vehicle" },
        { range: 9, displays: "system" },
        { range: 10, displays: "cityname" },
        { range: 11, displays: "c" },
        { range: 12, displays: "cpp" },
        { range: 13, displays: "csharp" },
        { range: 14, displays: "dart" },
        { range: 15, displays: "html" },
        { range: 16, displays: "java" },
        { range: 17, displays: "javascript" },
        { range: 18, displays: "kotlin" },
        { range: 19, displays: "matlap" },
        { range: 20, displays: "php" },
        { range: 21, displays: "python" },
        { range: 22, displays: "ruby" },
        { range: 23, displays: "rust" },
        { range: 24, displays: "sql" },
        { range: 25, displays: "swift" },
        { range: 26, displays: "typescript" },
        { range: 27, displays: "englishQuote" },
        { range: 28, displays: "frenchQuote" },
        { range: 29, displays: "germanQuote" },
        { range: 30, displays: "greekQuote" },
        { range: 31, displays: "japaneseQuote" },
        { range: 32, displays: "khmerQuote" },
        { range: 33, displays: "koreanQuote" },
        { range: 34, displays: "russianQuote" },
        { range: 35, displays: "spanishQuote" },
        { range: 36, displays: "swedishQuote" }
    ];
    const initial = { opacity: 0 };
    const animate = { opacity: 1 };
    const exit = { opacity: 0 }
    return (
        <motion.div
            initial={initial}
            animate={animate}
            exit={exit}
            className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setOpenModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-slate-800  rounded-md shadow-lg">
                    {options.map((range) => (
                        <div
                            key={range.range}
                            onClick={() => { setOpenModal(false); handleWordTypes(range.displays) }}
                            className="text-slate-500 hover:text-white cursor-pointer" >
                            {range.displays.toLocaleUpperCase()}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}