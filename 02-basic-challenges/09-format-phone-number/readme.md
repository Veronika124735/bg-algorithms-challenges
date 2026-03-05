# Предизвикателство: Форматиране на телефонен номер

## Инструкции

Напишете функция `formatPhoneNumber`, която приема масив от числа и връща низ, представляващ телефонен номер, формиран чрез конкатенация на числата в зададения формат.

### Сигнатура на функцията

```js
/**
 * Returns a string representing a phone number.
 * @param {number[]} numbers - The numbers to use in the phone number.
 * @returns {string} - The formatted phone number.
 */
function formatPhoneNumber(numbers: number[]): string;
```

### Примери

```js
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => "(123) 456-7890"
formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]); // => "(519) 555-4468"
formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]); // => "(345) 501-2527"
```

### Ограничения

- Входният масив винаги ще съдържа 10 числа
- Числата могат да бъдат произволно цяло число от 0 до 9

### Подсказки

- Можете да използвате метода `Array.join`, за да конкатенирате числата в масива.
- Можете да използвате метода `Array.slice`, за да получите подмножество от масива.

### Тестови случаи

```js
test('Format Phone Number', () => {
  expect(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe(
    '(123) 456-7890'
  );
  expect(formatPhoneNumber([5, 0, 2, 4, 8, 1, 9, 6, 3, 7])).toBe(
    '(502) 481-9637'
  );
  expect(formatPhoneNumber([9, 9, 9, 9, 9, 9, 9, 9, 9, 9])).toBe(
    '(999) 999-9999'
  );
});
```
