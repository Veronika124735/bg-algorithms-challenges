# Предизвикателство: Максимална сума на подмасив - O(n) Решение

## Инструкции

Напишете функция наречена `maxSubarraySum`, която приема масив от цели числа и положително цяло число `k` като вход. Функцията трябва да намери максималната сума на всеки подмасив с дължина `k`, използвайки O(n) решение чрез техниката на плъзгащия прозорец.

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

- Можете да използвате техниката на плъзгащия прозорец, за да следите ефективно сумата на подмасиви с дължина k, докато итерирате през масива.

### Решения

<details>
  <summary>Натиснете за решение</summary>

```javascript
function maxSubarraySum(arr, k) {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  currentSum = maxSum;

  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum - arr[i - k] + arr[i];
    console.log(`${currentSum} - ${arr[i - k]} + ${arr[i]}`); // Optional
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
```

### Обяснение

- maxSum и currentSum се инициализират на 0. Тези променливи ще се използват за следене на максималната сума и сумата на текущия плъзгащ прозорец съответно.

- Първият цикъл (for цикъл) изчислява сумата на първите k елемента в масива arr и я присвоява на maxSum. Това инициализира currentSum и maxSum за първия плъзгащ прозорец.

- currentSum се задава на стойността на maxSum. Това задава началната сума на текущия плъзгащ прозорец.

- Вторият цикъл (for цикъл) започва от индекс k и итерира през масива arr. Този цикъл имплементира техниката на плъзгащия прозорец.

- Във втория цикъл, currentSum се обновява чрез концепцията на плъзгащия прозорец. Елементът, който напуска прозореца (на индекс i - k), се изважда, а новият елемент, влизащ в прозореца (на индекс i), се добавя.

- Незадължителен оператор console.log записва обновяването на currentSum за цели на визуализация, показвайки как прозорецът се плъзга и как се променя текущата сума.

- maxSum се обновява чрез функцията Math.max, за да следи максималната срещната сума по време на обхода на плъзгащия прозорец.

- Накрая, функцията връща maxSum, която представя максималната сума на всеки подмасив с дължина k във входния масив.

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
