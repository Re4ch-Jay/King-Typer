import { useCallback, useState } from "react";
import { faker } from "@faker-js/faker";
import { faker as fakerAR } from "@faker-js/faker/locale/ar"
import { faker as fakerIND } from "@faker-js/faker/locale/en_IND"
import { getRandomWord } from '../lib/wordGenerator';


function generateARWords(count) {
  return fakerAR.random.words(count);
}

function generateINDWords(count) {
  return fakerIND.random.words(count);
}


const generateWords = (count, option) => {
  switch (option) {
    case 'city':
      return faker.address.cityName();
    case 'name':
      return faker.name.firstName();
    case 'email':
      return faker.internet.email();
    case 'animal':
      return faker.animal.dog();
    case 'commerce':
      return faker.commerce.department();
    case 'company':
      return faker.company.bs();
    case 'lorem':
      return faker.lorem.words(count);
    case 'music':
      return faker.music.genre();
    case 'vehicle':
      return faker.vehicle.bicycle();
    case 'system':
      return faker.system.commonFileExt();
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
      return generateARWords(count);
    case 'indian eng':
      return generateINDWords(count);
    default:
      return faker.random.words(count).toLowerCase();
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
