import english from './languages/english.json';
import french from './languages/french.json';
import spanish from './languages/spainish.json';
import greek from './languages/greek.json';
import korean from './languages/korean.json';
import japanese from './languages/japanese.json';
import norwegian from './languages/norwegian.json';
import portuguese from './languages/portuguese.json';
import russian from './languages/russian.json';
import swedish from './languages/swedish.json';
import german from './languages/german.json';
import ukrainian from './languages/ukrainian.json';
import lithuanian from './languages/lithuanian.json';
import italian from './languages/italian.json';
import filipino from './languages/filipino.json';
import estonian from './languages/estonian.json';
import czech from './languages/czech.json';
import armenian from './languages/armenian.json';
import khmer from './languages/khmer.json';
import number from './languages/number.json';
import arabic from './languages/arabic.json';
import animal from './nouns/animal.json';
import city from './nouns/city.json';
import commerce from './nouns/commerce.json';
import company from './nouns/company.json';
import email from './nouns/email.json';
import music from './nouns/music.json';
import vehicle from './nouns/vehicle.json';
import lorem from './nouns/lorem.json';
import system from './nouns/system.json';
import name from './nouns/name.json';
import cityname from './nouns/city_name.json';

const wordMap = {
    English: english,
    French: french,
    Spanish: spanish,
    Greek: greek,
    Korean: korean,
    Japanese: japanese,
    Norwegian: norwegian,
    Portuguese: portuguese,
    Russian: russian,
    Swedish: swedish,
    German: german,
    Ukrainian: ukrainian,
    Lithuanian: lithuanian,
    Italian: italian,
    Filipino: filipino,
    Estonian: estonian,
    Czech: czech,
    Armenian: armenian,
    Khmer: khmer,
    Number: number,
    Arabic: arabic,
    Animal: animal,
    City: city,
    Commerce: commerce,
    Company: company,
    Email: email,
    Music: music,
    Vehicle: vehicle,
    Lorem: lorem,
    System: system,
    Name: name,
    CityName: cityname,
};

export function getRandomWord(wordType, count = 1) {
    const wordList = wordMap[wordType];
    if (wordList) {
        const words = [];
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * wordList.length);
            words.push(wordList[randomIndex]);
        }
        return words.join(' '); // Join words with a space
    }
    return null;
}

