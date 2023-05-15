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


const languageMap = {
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
};

export function getRandomWord(language, count = 1) {
    const wordList = languageMap[language];
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

