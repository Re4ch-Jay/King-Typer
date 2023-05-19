import emojiFlags from './countries/flag.json';

function getEmojiFlag(code) {
    const emojiFlag = emojiFlags.find((flag) => flag.code === code);
    return emojiFlag ? emojiFlag.emoji : null;
}

function getCountryByCode(code) {
    return emojiFlags.find((flag) => flag.code === code) || null;
}

function getUnicode(code) {
    const emojiFlag = emojiFlags.find((flag) => flag.code === code);
    return emojiFlag ? emojiFlag.unicode : null;
}

export { getEmojiFlag, getCountryByCode, getUnicode };