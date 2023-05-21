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
    'cityname': 'CityName',
    'c': 'C',
    'cpp': 'Cpp',
    'csharp': 'Csharp',
    'dart': 'Dart',
    'html': 'Html',
    'java': 'Java',
    'javascript': 'Javascript',
    'kotlin': 'Kotlin',
    'matlap': 'Matlap',
    'php': 'Php',
    'python': 'Python',
    'ruby': 'Ruby',
    'rust': 'Rust',
    'sql': 'Sql',
    'swift': 'Swift',
    'typescript': 'Typescript',
    'englishQuote': 'EnglishQuote',
    'frenchQuote': 'FrenchQuote',
    'germanQuote': 'GermanQuote',
    'greekQuote': 'GreekQuote',
    'japaneseQuote': 'JapaneseQuote',
    'khmerQuote': 'KhmerQuote',
    'koreanQuote': 'KoreanQuote',
    'russianQuote': 'RussianQuote',
    'spanishQuote': 'SpanishQuote',
    'swedishQuote': 'SwedishQuote',
  };

  const selectedOption = wordOptions[option] || 'English';
  if (selectedOption.endsWith('Quote')) {
    return getRandomWord(selectedOption, 1);
  }
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
