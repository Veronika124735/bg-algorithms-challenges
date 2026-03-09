/*
Space Complexity: O(1)
Time Complexity: O(1)
*/

// O(1) Space & O(1) Time
function add(num1, num2) {
  return num1 + num2;
}

console.time('Add O(1)');
console.log('Add Result:', add(5, 10));
console.timeEnd('Add O(1)');
console.log('Space Complexity: O(1)\n');

// O(n) Space & O(n) Time
function createArray(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(i);
  }
  return arr;
}

console.time('Create Array O(n)');
const arrExample = createArray(10);
console.log('Create Array Result:', arrExample);
console.timeEnd('Create Array O(n)');
console.log('Space Complexity: O(n)\n');

// O(n^2) Space & O(n^2) Time
function createMatrix(num) {
  const matrix = [];
  for (let i = 0; i < num; i++) {
    matrix[i] = [];
    for (let j = 0; j < num; j++) {
      matrix[i][j] = i + j;
    }
  }
  return matrix;
}

console.time('Create Matrix O(n^2)');
const matrixExample = createMatrix(5);
console.log('Create Matrix Result:', matrixExample);
console.timeEnd('Create Matrix O(n^2)');
console.log('Space Complexity: O(n^2)\n');

// O(log n) Space & O(log n) Time
function findPower(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent % 2 === 0) {
    const halfPower = findPower(base, exponent / 2);
    return halfPower * halfPower;
  } else {
    const halfPower = findPower(base, (exponent - 1) / 2);
    return base * halfPower * halfPower;
  }
}

console.time('Find Power O(log n)');
console.log('Find Power Result:', findPower(2, 8));
console.timeEnd('Find Power O(log n)');
console.log('Space Complexity: O(log n)\n');

// O(1) Space & O(n) Time
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.time('Find Sum O(n)');
console.log('Find Sum Result:', findSum([1, 2, 3, 4, 5]));
console.timeEnd('Find Sum O(n)');
console.log('Space Complexity: O(1)\n');