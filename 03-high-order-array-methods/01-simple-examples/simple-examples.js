const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const doubledNumbers = numbers.map((num) => num * 2);
console.log('Map (doubled):', doubledNumbers);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 * Let's filter numbers greater than 2.
 */
const filteredNumbers = numbers.filter((num) => num > 2);
console.log('Filter (> 2):', filteredNumbers);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 * Let's calculate the sum of all numbers.
 */
const sum = numbers.reduce((total, num) => total + num, 0);
console.log('Reduce (sum):', sum);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
console.log('ForEach:');
numbers.forEach((num) => console.log(' - Number:', num));

/**
 * find: Returns the first array element that satisfies a specified condition.
 */
const foundNumber = numbers.find((num) => num > 2);
console.log('Find (first > 2):', foundNumber);

/**
 * some: Checks if at least one array element satisfies a condition.
 */
const hasNumberGreaterThanFive = numbers.some((num) => num > 5);
console.log('Some (> 5):', hasNumberGreaterThanFive);

/**
 * every: Checks if all array elements satisfy a condition.
 */
const allNumsGreaterThanZero = numbers.every((num) => num > 0);
console.log('Every (> 0):', allNumsGreaterThanZero);
