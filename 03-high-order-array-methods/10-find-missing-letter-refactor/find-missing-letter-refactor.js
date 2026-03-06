function findMissingLetter(arr) {
    let start = arr[0].charCodeAt(0);
    const missingCode = arr.map(char => char.charCodeAt(0))
        .find((code) => {
            if (code - start > 1) return true;
            start = code;
            return false;
        });

    return missingCode ? String.fromCharCode(missingCode - 1)
        : '';
}

module.exports = findMissingLetter;
