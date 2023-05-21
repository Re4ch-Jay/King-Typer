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
import c from './programmings/c.json';
import cpp from './programmings/cpp.json';
import csharp from './programmings/csharp.json';
import dart from './programmings/dart.json';
import html from './programmings/html.json';
import java from './programmings/java.json';
import javascript from './programmings/javascript.json';
import kotlin from './programmings/kotlin.json';
import matlap from './programmings/matlap.json';
import php from './programmings/php.json';
import python from './programmings/python.json';
import ruby from './programmings/ruby.json';
import rust from './programmings/rust.json';
import sql from './programmings/sql.json';
import swift from './programmings/swift.json';
import typescript from './programmings/typescript.json';
import englishQuote from './quotes/english_quote.json';
import frenchQuote from './quotes/french_quote.json';
import germanQuote from './quotes/german_quote.json';
import greekQuote from './quotes/greek_quote.json';
import japaneseQuote from './quotes/japanese_quote.json';
import khmerQuote from './quotes/khmer_quote.json';
import koreanQuote from './quotes/korean_quote.json';
import russianQuote from './quotes/russian_quote.json';
import spanishQuote from './quotes/spainish_quote.json';
import swedishQuote from './quotes/swedish_quote.json';

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
    C: c,
    Cpp: cpp,
    Csharp: csharp,
    Dart: dart,
    Html: html,
    Java: java,
    Javascript: javascript,
    Kotlin: kotlin,
    Matlap: matlap,
    Php: php,
    Python: python,
    Ruby: ruby,
    Rust: rust,
    Sql: sql,
    Swift: swift,
    Typescript: typescript,
    EnglishQuote: englishQuote,
    FrenchQuote: frenchQuote,
    GermanQuote: germanQuote,
    GreekQuote: greekQuote,
    JapaneseQuote: japaneseQuote,
    KhmerQuote: khmerQuote,
    KoreanQuote: koreanQuote,
    RussianQuote: russianQuote,
    SpanishQuote: spanishQuote,
    SwedishQuote: swedishQuote,
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

