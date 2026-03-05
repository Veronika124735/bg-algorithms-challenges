function areAllCharactersUnique(str) {
     const charSet = new Set(str);
     return charSet.size === str.length;
}

module.exports = areAllCharactersUnique;
