# Предизвикателство: Валидни анаграми

## Инструкции

Напишете функция наречена `validAnagrams`, която приема два низа и определя дали те са валидни анаграми един на друг. Анаграма е дума или фраза, формирана чрез пренареждане на буквите на друга дума или фраза, като обикновено се използват всички оригинални букви точно веднъж.

### Сигнатура на функцията

```js
/**
 * Determines whether two strings are valid anagrams.
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {boolean} - True if the strings are valid anagrams, false otherwise.
 */
function validAnagrams(str1: string, str2: string): boolean;
```

### Примери

```js
validAnagrams('listen', 'silent'); // true
validAnagrams('hello', 'world'); // false
validAnagrams('astronomer', 'moonstarer'); // true
```

### Подсказки

- Разделете низовете на масиви от символи, след което редуцирайте всеки масив до обект с честоти на символите за низовете
- Сравнете честотите

## Решения

<details>
  <summary>Натиснете за решение</summary>

```js
function validAnagrams(str1, str2) {

}
```

### Обяснение

- Създайте променлива `freqCount1` и я задайте на резултата от извикването на `reduce` върху `str1.split('')`. Това ще създаде обект, който съдържа броя на честотите на всеки символ в `str1`. Например `validAnagrams('listen', 'silent')` ще върне `{ l: 1, i: 1, s: 1, t: 1, e: 1, n: 1 }` за `freqCount1`.
- Направете същото за `freqCount2` и го задайте на резултата от извикването на `reduce` върху `str2.split('')`. Това ще създаде обект, който съдържа броя на честотите на всеки символ в `str2`.
- Object.keys ще провери дали всеки символ в `freqCount1` има същата честота в `freqCount2`. Ако всички честоти са равни, `every` ще върне `true`. Ако някоя от честотите не е равна, `every` ще върне `false` и ще знаем, че низовете не са валидни анаграми.

</details>

### Тестови случаи

```js
test('Checking for Valid Anagrams', () => {
  expect(validAnagrams('listen', 'silent')).toBe(true);
  expect(validAnagrams('hello', 'world')).toBe(false);
  expect(validAnagrams('astronomer', 'moonstarer')).toBe(true);
  expect(validAnagrams('apple', 'banana')).toBe(false);
});
```
