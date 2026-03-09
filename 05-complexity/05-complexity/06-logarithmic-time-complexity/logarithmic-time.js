/*
Logarithmic Time (O(log n))

Logarithmic time means that the time required to complete a function is proportional to the logarithm of the input data set. 

*/
function power(base, exp) {
    if (exp === 0) 
    return 1;

  const halfExp = Math.floor(exp / 2);
  const halfResult = power(base, halfExp);

  if (exp % 2 === 0) {
    return halfResult * halfResult;
  } else {
    return base * halfResult * halfResult;
  }
}

console.time('Power Small');
(power(2, 100));
console.timeEnd('Power Small');

console.time('Power Large');
(power(2, 1000000000)); 
console.timeEnd('Power Large');