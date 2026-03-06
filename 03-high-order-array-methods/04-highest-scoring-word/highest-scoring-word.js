function highestScoringWord(str) {
    const words = str.split(' ');

    const scores = words.map(word => {
        let score = 0;
        for (const char of word) {
            score += char.charCodeAt(0) - 96;
        }
        return score;
    });

    const highestScore = Math.max(...scores);
    const highestIndex = scores.indexOf(highestScore);

    return words[highestIndex];
}

module.exports = highestScoringWord