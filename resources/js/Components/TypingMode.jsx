import React, { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { BiTimeFive } from "react-icons/bi";
import Card from "./Card";
import { WordTypeModal } from "./WordTypeModal";
import { LanguageTypeModal } from "./LanguageTypeModal";
import { Modal } from "./WordModal";

const TypingMode = ({
    handleSeconds,
    handleNumberOfWords,
    handleWordTypes,
}) => {
    const [openModal, setOpenModal] = useState(false);
    const [timeMode, setTimeMode] = useState(true);
    const [wordMode, setWordMode] = useState(false);
    const [languageModel, setLanguageModel] = useState(false);
    const [customNumberOfWordsModal, setCustomNumberOfWordsModal] = useState(
        false
    );
    const [customTimeModal, setCustomTimeModal] = useState(false);
    const [word, setWord] = useState(true);
    const [number, setNumber] = useState(false);

    const handleClickWord = (type) => {
        handleWordTypes(type);
        setWord(true);
        setNumber(false);
    };

    const handleClickNumber = (type) => {
        handleWordTypes(type);
        setNumber(true);
        setWord(false);
    };

    const handleClickTimeMode = () => {
        setTimeMode(true);
        setWordMode(false);
    };

    const handleClickWordMode = () => {
        setWordMode(true);
        setTimeMode(false);
    };

    return (
        <Card className="mb-10">
            <div
                onClick={() => handleClickWord("english")}
                className={`text-${word ? "primary" : "slate"}-500 hover:text-gray-800 cursor-pointer`}
            >
                <strong>Aa</strong> Words
            </div>
            <div
                onClick={() => handleClickNumber("number")}
                className={`text-${number ? "primary" : "slate"}-500 hover:text-gray-800 cursor-pointer`}
            >
                # Number
            </div>

            <div
                onClick={() => setLanguageModel(!languageModel)}
                className="text-slate-500 hover:text-gray-800 cursor-pointer"
            >
                <TbWorld />
            </div>
            <button
                onClick={() => setOpenModal(!openModal)}
                className="text-slate-500 hover:text-gray-800 cursor-pointer"
            >
                ...
            </button>
            <div className="bg-gray-800 p-1"></div>

            <button
                onClick={handleClickTimeMode}
                className={`text-${timeMode ? "primary" : "slate"}-500 hover:text-gray-800 cursor-pointer flex justify-center items-center`}
            >
                Time <BiTimeFive />
            </button>

            <button
                onClick={handleClickWordMode}
                className={`text-${wordMode ? "primary" : "slate"}-500 hover:text-gray-800 cursor-pointer`}
            >
                Words Count
            </button>

            <div className="bg-gray-800 p-1"></div>

            {wordMode && (
                <>
                    <button
                        onClick={() => handleNumberOfWords(15)}
                        className="text-slate-500 hover:text-gray-800 cursor-pointer"
                    >
                        15
                    </button>
                    <button
                        onClick={() => handleNumberOfWords(30)}
                        className="text-slate-500 hover:text-gray-800 cursor-pointer"
                    >
                        30
                    </button>
                    <button
                        onClick={() => handleNumberOfWords(120)}
                        className="text-slate-500 hover:text-gray-800 cursor-pointer"
                    >
                        120
                    </button>
                </>
            )}

            {timeMode && (
                <>
                    <button
                        onClick={() => handleSeconds(15)}
                        className="text-slate-500 hover:text-gray-800 cursor-pointer"
                    >
                        15s
                    </button>
                    <button
                        onClick={() => handleSeconds(30)}
                        className="text-slate-500 hover:text-gray-800 cursor-pointer"
                    >
                        30s
                    </button>
                    <button
                        onClick={() => handleSeconds(60)}
                        className="text-slate-500 hover:text-gray-800 cursor-pointer"
                    >
                        60s
                    </button>
                </>
            )}

            {openModal && <WordTypeModal setOpenModal={setOpenModal} handleWordTypes={handleWordTypes} />}

            {languageModel && (
                <LanguageTypeModal setLanguageModel={setLanguageModel} handleWordTypes={handleWordTypes} />
            )}

            {customNumberOfWordsModal && <CusomNumberWord setCustomNumberOfWordsModal={setCustomNumberOfWordsModal} />}

            {customTimeModal && <CustomTimeModal setCustomTimeModal={setCustomTimeModal} />}
        </Card>
    );
};

export default TypingMode;

function CusomNumberWord({ setCustomNumberOfWordsModal }) {
    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setCustomNumberOfWordsModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-slate-800  rounded-md shadow-lg">
                    <div className="flex justify-between gap-2">
                        <label htmlFor="" >
                            Custom Words Count
                        </label>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function CustomTimeModal({ setCustomTimeModal }) {
    return (
        <Modal onClick={() => setCustomTimeModal(false)}>
            <div className="flex justify-between gap-2">
                <label htmlFor="">
                    Custom Time Count
                </label>
                <input type="text" />
            </div>
        </Modal>
    )
}

