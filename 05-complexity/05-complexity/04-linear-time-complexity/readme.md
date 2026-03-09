# Линейна времева сложност `O(n)`

Установихме, че линейната времева сложност е когато времето за изпълнение се мащабира линейно с входа. С увеличаването на размера на входа, времето за изпълнение на алгоритъма също се увеличава по линеен начин. Това поведение се означава с Big O нотация като O(n), където n представя размера на входа.

Нека разгледаме пример за функция с линейно време O(n).

```js
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
```

Тази функция приема масив и събира числата. За всяко число в масива ще извърши една стъпка. Ако масивът има 2 числа, ще извърши 2 стъпки. Ако масивът има 1 милион числа, ще извърши 1 милион стъпки, което очевидно отнема повече време.

Нека го изпробваме.

```js
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const arr1 = [1, 2, 3, 4, 5];
console.time('Sum Array 1');
sumArray(arr1);
console.timeEnd('Sum Array 1');

const arr2 = Array.from({ length: 10000 }, (_, index) => index + 1);

console.time('Sum Array 2');
sumArray(arr2);
console.timeEnd('Sum Array 2');
```

В `Sum Array 1` имаме масив с 5 числа. В `Sum Array 2` имаме масив с 10 000 числа. Нека стартираме този код и да видим колко време отнема.

Вашите резултати ще бъдат различни, но аз получавам следното:

```js
Sum Array 1: 0.039ms
Sum Array 2: 0.152ms
```

Нека увеличим размера на масива в `Sum Array 2` на 100 000.

```js
const arr2 = Array.from({ length: 100000 }, (_, index) => index + 1);
```

Сега стартирайте кода отново. Аз получавам нещо доста подобно:

```js
Sum Array 1: 0.042ms
Sum Array 2: 1.565ms
```

Нека добавим още две нули и направим масива 10 милиона.

Сега получавам това:

```js
Sum Array 1: 0.039ms
Sum Array 2: 9.09ms
```

Така че огромен скок тук.

Това е пример за линейна времева сложност. Времето за изпълнение се мащабира линейно с входа.

Повечето предизвикателства, които направихме, са `O(n)`, защото трябва да итерират през входа.

Дори нещо като:

```js
function reverseString(str) {
  return str.split('').reverse().join('');
}
```

е `O(n)`, защото трябва да итерира през низа. Ние не написахме цикъл, но методите `split`, `reverse` и `join` всички трябва да итерират през низа.

Има и други сложности, които ще разгледаме по-късно, но засега ще се фокусираме върху `O(1)` и `O(n)`.

## Сложност на играта със зарове

Помните ли играта със зарове, която направихме? Нека разгледаме сложността й. Ето функцията:

```js
function diceGameSimulation() {
  const rollDice = () => Math.floor(Math.random() * 6) + 1;

  const initialSum = rollDice() + rollDice();

  if (initialSum === 7 || initialSum === 11) {
    return 'Win';
  } else if (initialSum === 2 || initialSum === 3 || initialSum === 12) {
    return 'Lose';
  }

  while (true) {
    const newSum = rollDice() + rollDice();
    if (newSum === 7 || newSum === 11) {
      return 'Win';
    } else if (newSum === initialSum) {
      return 'Lose';
    }
  }
}
```

Тази функция има няколко различни части. Нека разгледаме всяка от тях.

```js
const rollDice = () => Math.floor(Math.random() * 6) + 1;
```

Тази функция е `O(1)`, защото не зависи от входа. Ще се изпълни винаги за едно и също време.

```js
const initialSum = rollDice() + rollDice();

if (initialSum === 7 || initialSum === 11) {
  return 'Win';
} else if (initialSum === 2 || initialSum === 3 || initialSum === 12) {
  return 'Lose';
}
```

Тази част също е `O(1)`, защото не зависи от входа. Ще се изпълни винаги за едно и също време.

```js
while (true) {
  const newSum = rollDice() + rollDice();
  if (newSum === 7 || newSum === 11) {
    return 'Win';
  } else if (newSum === initialSum) {
    return 'Lose';
  }
}
```

Тази част е `O(n)`, защото зависи от входа. Колкото повече пъти се изпълни цикълът, толкова повече време ще отнеме.

Така че общата сложност на функцията е `O(n)`, защото `O(1)` частите са незначителни в сравнение с `O(n)` частта.
