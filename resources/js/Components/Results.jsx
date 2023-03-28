import { motion } from "framer-motion";
import { formatPercentage, calculateWPM } from "../utils/helpers";
import html2canvas from 'html2canvas';
import { useState, useRef } from "react";
const Results = ({
  state,
  errors,
  accuracyPercentage,
  total,
  className = "",
  numberOfWords,
  wordType,
  countDownSeconds
}) => {
  const [screenshot, setScreenshot] = useState(null);
  const appRef = useRef(null);


  if (state !== "finish") {
    return null;
  }
  
  if(state === 'finish') {
    console.log('save finish test to mysql')
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

  return (
    
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
        Errors: {errors}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 1.4 }}
      >
        Typed: {total}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 1.8 }}
      >
        WPM: {calculateWPM(total, numberOfWords)}
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
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 3.4 }}
        className="text-slate-400 text-lg cursor-pointer hover:underline"
      >
        Sign In To Save Result
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 3.8 }}
        className="text-slate-400 text-lg cursor-pointer hover:underline"
      >
        <button onClick={takeScreenshot}>Take Screenshot</button>
      </motion.li>
    </motion.ul>

  );
};

export default Results;
