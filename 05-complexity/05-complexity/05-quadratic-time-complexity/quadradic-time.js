/*
Quadradic Time O(n^2)

Quadradic time means that the time required to complete a function is proportional to the square of the input data set.
*/
function calculateTotal(arr) {
  let total = 0;
  let extraTotal = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];

    for (let j = 0; j < arr.length; j++) {
      extraTotal += arr[j];
    }
  }

  return total + extraTotal;
}

const numbers1 = [1, 2, 3, 4, 5];

console.time("Total 1");
calculateTotal(numbers1);
console.timeEnd("Total 1");


const numbers2 = Array.from({ length: 10000000 }, (_, i) => i + 1);

console.time("Total 2");
calculateTotal(numbers2);
console.timeEnd("Total 2");