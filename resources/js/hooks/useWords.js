import { useCallback, useState } from "react";
import { getRandomWord } from '../lib/wordGenerator';

const generateWords = (count, option) => {
  const wordOptions = {
    'city': 'City',
    'name': 'Name',
    'email': 'Email',
    'animal': 'Animal',
    'commerce': 'Commerce',
    'company': 'Company',
    'lorem': 'Lorem',
    'music': 'Music',
    'vehicle': 'Vehicle',
    'system': 'System',
    'number': 'Number',
    'english': 'English',
    'spainish': 'Spanish',
    'french': 'French',
    'greek': 'Greek',
    'korean': 'Korean',
    'japanese': 'Japanese',
    'norwegian': 'Norwegian',
    'portuguese': 'Portuguese',
    'russian': 'Russian',
    'swedish': 'Swedish',
    'german': 'German',
    'ukrainian': 'Ukrainian',
    'lithuanian': 'Lithuanian',
    'italian': 'Italian',
    'filipino': 'Filipino',
    'estonian': 'Estonian',
    'czech': 'Czech',
    'armenian': 'Armenian',
    'khmer': 'Khmer',
    'arabic': 'Arabic',
  };

  const selectedOption = wordOptions[option] || 'English';
  return getRandomWord(selectedOption, count);
};


const useWords = (count, option) => {
  const [words, setWords] = useState(generateWords(count, option));

  const updateWords = useCallback(() => {

    setWords(generateWords(count, option))

  }, [count, option]);

  return { words, updateWords };
};

export default useWords;
