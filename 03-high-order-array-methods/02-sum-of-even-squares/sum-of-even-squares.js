function sumOfEvenSquares(numbers) {
    return numbers.filter(num => num % 2 === 0)
    .map(num => num * num)
    .reduce((sum, sq) => sum + sq, 0);
}
console.log(sumOfEvenSquares([1, 2, 3, 4, 5]));
console.log(sumOfEvenSquares([-1, 0, 1, 2, 3, 4]));
module.exports = sumOfEvenSquares;
