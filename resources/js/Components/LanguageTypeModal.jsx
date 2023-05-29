import React from 'react'
import { motion } from 'framer-motion'

export const LanguageTypeModal = ({ setLanguageModel, handleWordTypes }) => {
    const languageOptions = [
        { range: 1, displays: "english" },
        { range: 2, displays: "spainish" },
        { range: 3, displays: "french" },
        { range: 4, displays: "indian eng" },
        { range: 5, displays: "italian" },
        { range: 6, displays: "arabic" },
        { range: 7, displays: "greek" },
        { range: 8, displays: "korean" },
        { range: 9, displays: "japanese" },
        { range: 10, displays: "norwegian" },
        { range: 11, displays: "portuguese" },
        { range: 12, displays: "swedish" },
        { range: 13, displays: "german" },
        { range: 14, displays: "ukrainian" },
        { range: 15, displays: "lithuanian" },
        { range: 16, displays: "filipino" },
        { range: 17, displays: "estonian" },
        { range: 18, displays: "czech" },
        { range: 19, displays: "armenian" },
        { range: 20, displays: "russian" },
        { range: 21, displays: "khmer" },
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
                onClick={() => setLanguageModel(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-slate-800  rounded-md shadow-lg">
                    {languageOptions.map((range) => (
                        <div
                            key={range.range}
                            onClick={() => { setLanguageModel(false); handleWordTypes(range.displays) }}
                            className="text-slate-500 hover:text-white cursor-pointer" >
                            {range.displays.toLocaleUpperCase()}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}