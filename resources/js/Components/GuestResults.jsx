import React from 'react'
import { motion } from "framer-motion";
import { formatPercentage, calculateWPM } from "../utils/helpers";
import html2canvas from 'html2canvas';
import { useState, useRef } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Successfull from './Successfull';

import useEngine from "@/hooks/useEngine";

const GuestResult = ({
  state,
  typeErrors,
  accuracyPercentage,
  total,
  className = "",
  numberOfWords,
  wordType,
  countDownSeconds,
}) => {

  const [screenshot, setScreenshot] = useState(null);
  const appRef = useRef(null);
  const { restart } = useEngine();
  const [isExploding, setIsExploding] = React.useState(true);

  if (state !== "finish") {
    return null;
  }

  const initial = { opacity: 0 };
  const animate = { opacity: 1 };

  const takeScreenshot = () => {
    html2canvas(appRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      setScreenshot(imgData);
      const downloadLink = document.createElement('a');
      downloadLink.href = imgData;
      downloadLink.download = 'result.png';
      downloadLink.click();
    });
  };


  const chart = [
    {
      name: 'WPM',
      uv: calculateWPM(total, countDownSeconds).toFixed(0),
      pv: calculateWPM(total, countDownSeconds).toFixed(0),
      amt: 2400,
    },
    {
      name: 'Accuracy',
      uv: accuracyPercentage,
      pv: accuracyPercentage,
      amt: 2210,
    },
    {
      name: 'Errors',
      uv: typeErrors,
      pv: typeErrors,
      amt: 2290,
    },
  ];


  return (
    <>
      <motion.div>
        <AreaChart
          width={1000}
          height={200}
          data={chart}
        >

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#000" fill="#FACC15" />
        </AreaChart>
      </motion.div>
      <Successfull isExploding={isExploding} />
      <motion.ul
        initial={initial}
        animate={animate}
        id="result"
        ref={appRef}
        className={`flex flex-col items-center text-4xl text-primary-400 space-y-3 ${className}`}
      >
        <motion.li
          initial={initial}
          animate={animate}
          transition={{ duration: 0.3 }}
          className="text-xl font-semibold"
        >
          Results
        </motion.li>
        <div className="grid grid-cols-2">
          <div>
            <motion.li
              initial={initial}
              animate={animate}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              Accuracy: {formatPercentage(accuracyPercentage)}
            </motion.li>
            <motion.li
              initial={initial}
              animate={animate}
              transition={{ duration: 0.3, delay: 1 }}
              className="text-red-500"
            >
              Errors: {typeErrors}
            </motion.li>
            <motion.li
              initial={initial}
              animate={animate}
              transition={{ duration: 0.3, delay: 1.4 }}
            >
              Typed: {total}
            </motion.li>
          </div>
          <div>
            <motion.li
              initial={initial}
              animate={animate}
              transition={{ duration: 0.3, delay: 1.8 }}
            >
              WPM: {calculateWPM(total, countDownSeconds).toFixed(0)}
            </motion.li>
            <motion.li
              initial={initial}
              animate={animate}
              transition={{ duration: 0.3, delay: 2.4 }}
            >
              Word Type: {wordType}
            </motion.li>
            <motion.li
              initial={initial}
              animate={animate}
              transition={{ duration: 0.3, delay: 2.8 }}
            >
              Time: {countDownSeconds}s
            </motion.li>
          </div>
        </div>

        <motion.li
          initial={initial}
          animate={animate}
          transition={{ duration: 0.3, delay: 3.8 }}
          className="text-slate-400 text-lg cursor-pointer hover:underline"
        >
          <button onClick={takeScreenshot}>Take Screenshot</button>
        </motion.li>
      </motion.ul>
    </>
  );
};

export default GuestResult;

