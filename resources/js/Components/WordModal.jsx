import React from 'react'
import { motion } from 'framer-motion'
export function Modal({ children, onClick }) {
    const initial = { opacity: 0 };
    const animate = { opacity: 1 };
    return (
        <motion.div
            initial={initial}
            animate={animate}
            className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={onClick}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                {children}
            </div>
        </motion.div>
    )
}
