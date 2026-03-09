# Предизвикателство: Максимална сума на подмасив - O(n^2) Решение

## Инструкции

Напишете функция наречена `maxSubarraySum`, която приема масив от цели числа и положително цяло число `k` като вход. Функцията трябва да намери максималната сума на всеки подмасив с дължина `k`, използвайки O(n^2) решение чрез вложени for цикли.

Ще се върнем към това и ще използваме техниката на плъзгащия прозорец, за да използваме O(n) решение.

### Сигнатура на функцията

```javascript
/**
 * Finds the maximum sum of any subarray of length k in the input array using an O(n^2) solution.
 * @param {number[]} arr - The input array of integers.
 * @param {number} k - The length of the subarray.
 * @returns {number} - The maximum sum of any subarray of length k.
 */
function maxSubarraySum(arr: number[], k: number): number
```

### Примери

```javascript
const arr1 = [2, 5, 3, 1, 11, 7, 6, 4];
const k1 = 3;
console.log(maxSubarraySum(arr1, k1)); // Output: 24

const arr2 = [-2, -5, -3, -1, -11, -7, -6, -4];
const k2 = 4;
console.log(maxSubarraySum(arr2, k2)); // Output: -9
```

### Ограничения

- Входното цяло число `k` ще бъде между 1 и дължината на масива.

### Подсказки

- Можете да използвате два вложени цикъла, за да итерирате през всички възможни подмасиви с дължина `k` и да изчислите техните суми.

### Решения

<details>
  <summary>Натиснете за решение</summary>

```javascript
function maxSubarraySum(arr, k) {
  let maxSum = 0;

  for (let i = 0; i <= arr.length - k; i++) {
    let currentSum = 0;

    for (let j = i; j < i + k; j++) {
      currentSum += arr[j];
    }

    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
```

### Обяснение

- Функцията `maxSubarraySum` използва два вложени цикъла, за да итерира през всички възможни подмасиви с дължина `k`.
- За всеки подмасив тя изчислява сумата чрез вложен цикъл и следи максималната срещната сума.
- Накрая връща максималната сума.

</details>

### Тестови случаи

```javascript
test('Finding maximum subarray sum using O(n^2) solution', () => {
  const arr1 = [2, 5, 3, 1, 11, 7, 6, 4];
  const k1 = 3;
  expect(maxSubarraySum(arr1, k1)).toBe(24);

  const arr2 = [-2, -5, -3, -1, -11, -7, -6, -4];
  const k2 = 4;
  expect(maxSubarraySum(arr2, k2)).toBe(-9);
});
```

---

Моля, имайте предвид, че предоставеното решение има времева сложност O(n^2) поради вложените цикли.
