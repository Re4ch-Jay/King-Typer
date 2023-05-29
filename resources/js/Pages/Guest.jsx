import React from 'react'
import GeneratedWords from '@/Components/GeneratedWords';
import RestartButton from "@/Components/RestartButton";
import TypingMode from "@/Components/TypingMode";
import UserTypings from '@/Components/UserTypings';
import useEngine from '@/hooks/useEngine';
import { calculateAccuracyPercentage } from "@/utils/helpers";
import { Head } from '@inertiajs/react';
import GuestResult from '@/Components/GuestResults';
import GuestMainLayout from '@/Layouts/GuestMainLayout';

const Guest = () => {
    const { words, typed, timeLeft, errors, state, restart, totalTyped, handleSeconds, handleNumberOfWords, handleWordTypes, wordType, numberOfWords, countDownSeconds } =
        useEngine();

    return (
        <GuestMainLayout>
            <Head title='Typing Guest' />
            <main>
                <section>
                    {state !== "finish" && (
                        <>
                            {state === "start" && <TypingMode handleSeconds={handleSeconds} handleNumberOfWords={handleNumberOfWords} handleWordTypes={handleWordTypes} />}

                            <WordType wordType={wordType} />
                            <NumberOfWords numberOfWords={numberOfWords} />
                            <CountdownTimer timeLeft={timeLeft} />

                            <WordsContainer>
                                <GeneratedWords key={words} words={words} />
                                <UserTypings
                                    className="absolute inset-0"
                                    words={words}
                                    userInput={typed}
                                />
                            </WordsContainer>
                        </>
                    )}

                    <GuestResult
                        className="mt-10"
                        state={state}
                        typeErrors={errors}
                        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
                        total={totalTyped}
                        wordType={wordType}
                        numberOfWords={numberOfWords}
                        countDownSeconds={countDownSeconds}
                    />

                    <RestartButton
                        className={"mx-auto mt-10 text-slate-500"}
                        onRestart={restart}
                    />
                    <HintText state={state} />
                </section>
            </main>
        </GuestMainLayout>
    )
}

export default Guest

const WordsContainer = ({ children }) => {
    return (
        <div className="relative text-3xl max-w-7xl leading-relaxed break-all mt-3">
            {children}
        </div>
    );
};

const CountdownTimer = ({ timeLeft }) => {
    return <h2 className="text-primary-400 text-xl font-medium">Time: {timeLeft}s</h2>;
};

const WordType = ({ wordType }) => {
    return <h2 className="text-primary-400 text-xl font-medium">Word Type: {wordType.toLocaleUpperCase()}</h2>;
};

const NumberOfWords = ({ numberOfWords }) => {
    return <h2 className="text-primary-400 text-xl font-medium">{numberOfWords} words</h2>;
};

const HintText = ({ state }) => {
    return (
        <div className='flex flex-col text-grey-50 text-sm my-10'>
            <p>Shift + Enter - restart test</p>
            {state !== "finish" &&
                (
                    <>
                        <p>Shift + F1 - open languages</p>
                        <p>Shift + F2 - open custom words</p>
                    </>
                )
            }

        </div>
    )
}