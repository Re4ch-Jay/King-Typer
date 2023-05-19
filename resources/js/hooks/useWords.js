import { useCallback, useState } from "react";
import { getRandomWord } from '../lib/wordGenerator';

const generateWords = (count, option) => {
  switch (option) {
    case 'city':
      return getRandomWord("City", count);
    case 'name':
      return getRandomWord("Name", count);
    case 'email':
      return getRandomWord("Email", count);
    case 'animal':
      return getRandomWord("Animal", count);
    case 'commerce':
      return getRandomWord("Commerce", count);
    case 'company':
      return getRandomWord("Company", count);
    case 'lorem':
      return getRandomWord("Lorem", count);
    case 'music':
      return getRandomWord("Music", count);
    case 'vehicle':
      return getRandomWord("Vehicle", count);
    case 'system':
      return getRandomWord("System", count);
    case 'number':
      return getRandomWord('Number', count);
    case 'english':
      return getRandomWord('English', count);
    case 'spainish':
      return getRandomWord('Spanish', count);
    case 'french':
      return getRandomWord('French', count);
    case 'greek':
      return getRandomWord('Greek', count);
    case 'korean':
      return getRandomWord('Korean', count);
    case 'japanese':
      return getRandomWord('Japanese', count);
    case 'norwegian':
      return getRandomWord('Norwegian', count);
    case 'portuguese':
      return getRandomWord('Portuguese', count);
    case 'russian':
      return getRandomWord('Russian', count);
    case 'swedish':
      return getRandomWord('Swedish', count);
    case 'german':
      return getRandomWord('German', count);
    case 'ukrainian':
      return getRandomWord('Ukrainian', count);
    case 'lithuanian':
      return getRandomWord('Lithuanian', count);
    case 'italian':
      return getRandomWord('Italian', count);
    case 'filipino':
      return getRandomWord('Filipino', count);
    case 'estonian':
      return getRandomWord('Estonian', count);
    case 'czech':
      return getRandomWord('Czech', count);
    case 'armenian':
      return getRandomWord('Armenian', count);
    case 'khmer':
      return getRandomWord('Khmer', count);
    case 'arabic':
      return getRandomWord('Arabic', count);
    default:
      return getRandomWord('English', count);
  }
};

const useWords = (count, option) => {
  const [words, setWords] = useState(generateWords(count, option));

  const updateWords = useCallback(() => {

    setWords(generateWords(count, option))

  }, [count, option]);

  return { words, updateWords };
};

export default useWords;
