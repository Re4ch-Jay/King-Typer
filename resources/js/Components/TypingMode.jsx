import React, { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { BiTimeFive } from "react-icons/bi";
import Card from "./Card";
import { WordTypeModal } from "./WordTypeModal";
import { LanguageTypeModal } from "./LanguageTypeModal";
import { Modal } from "./WordModal";
import { motion } from "framer-motion";
import useShiftKey from "@/hooks/useShiftKey";

const TypingMode = ({
    handleSeconds,
    handleNumberOfWords,
    handleWordTypes,
}) => {
    const [openModal, setOpenModal] = useState(false);
    const [timeMode, setTimeMode] = useState(true);
    const [languageModel, setLanguageModel] = useState(false);
    const [customNumberOfWordsModal, setCustomNumberOfWordsModal] = useState(
        false
    );
    const [customTimeModal, setCustomTimeModal] = useState(false);
    const [word, setWord] = useState(true);
    const [number, setNumber] = useState(false);

    useShiftKey(() => { setLanguageModel(!languageModel); setOpenModal(false) }, "F1")
    useShiftKey(() => { setOpenModal(!openModal); setLanguageModel(false) }, "F2")

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

    const initial = { opacity: 0 };
    const animate = { opacity: 1 };

    return (
        <motion.div
            initial={initial}
            animate={animate}
        >
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

                <div className="bg-gray-800 p-1"></div>

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
        </motion.div>
    );
};

export default TypingMode;

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

