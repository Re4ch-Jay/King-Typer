import React from 'react'

export function Modal({ children, onClick }) {
    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={onClick}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                {children}
            </div>
        </div>
    )
}
