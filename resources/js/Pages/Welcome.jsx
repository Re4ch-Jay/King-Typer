import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <body className="bg-gray-900 text-white">
                <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-extrabold leading-10 tracking-tight text-gray-200 sm:text-4xl md:text-5xl">King-Typer</h1>
                        <p className="mt-4 text-xl leading-6 text-gray-500">Start your typing test today and see how fast you can type!</p>
                        <div className='grid grid-cols-2 gap-2'>
                            <a href="/dashboard" className="btn btn-primary">Start Test</a>
                            <a href="/dashboard" className="btn btn-primary">Sign Up</a>
                        </div>
                    </div>
                    <div >
                        What is King-Typer?
                    </div>
                    <div>
                        A website for typing test based, accuracy, wpm and challenge with others.
                    </div>

                    <div>
                        Typing is a skill that is essential in today's world. Whether you are a student, a professional, or just someone who wants to be able to communicate effectively, being able to type quickly and accurately is a valuable skill. There are many different ways to improve your typing skills, including taking typing tests, using a typing tutor, and practicing regularly. With a little effort, you can improve your typing skills and become a more efficient communicator.
                    </div>

                    <div>
                        How to play?
                    </div>

                    <div>
                        <li>1. Select the length of the test.</li>
                        <li>2. Start the test and type the text as quickly and accurately as possible.</li>
                        <li>3. The test will end when the time runs out. Your typing speed and accuracy will be displayed.</li>
                        <li>4. Repeat the test as often as you like to improve your typing speed and accuracy.</li>
                    </div>

                    <div>
                        How to improve my typing?
                    </div>

                    <div>
                        <li>1. Use all 10 fingers.</li>
                        <li>2. Practice regularly.</li>
                        <li>3. Use a typing tutor.</li>
                        <li>4. Take breaks.</li>
                    </div>

                    <div>
                        Is Typing fun?
                    </div>

                    <div>
                        Typing can be fun. It is a skill that can be used for a variety of purposes, such as writing, creating content, and playing games. Typing can also be a great way to relieve stress and improve your mental focus. If you are looking for a new skill to learn, or if you want to improve your typing speed and accuracy, I encourage you to give typing a try. You may be surprised at how much fun it can be.
                    </div>

                    <footer className="mt-8 text-gray-500 text-center">
                        <p>Copyright © 2023 Typing Test</p>
                    </footer>
                </div>
            </body>
            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
