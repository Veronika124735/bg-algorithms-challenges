# Предизвикателство: Намиране на първия неповтарящ се символ

Това предизвикателство е подобно на предишното. Ако сте го разбрали, трябва да можете да се справите с това самостоятелно.

## Инструкции

Напишете функция `findFirstNonRepeatingCharacter`, която приема низ и връща първия неповтарящ се символ в низа.

Ако няма неповтарящи се символи, функцията трябва да върне `null`.

### Сигнатура на функцията

```js
/**
 * Returns the first non-repeating character in a string.
 * @param {string} str - The string to search.
 * @returns {string | null} - The first non-repeating character in the string or null if there are no non-repeating characters.
 */
function findFirstNonRepeatingCharacter(str: string): string | null;
```

### Примери

```js
findFirstNonRepeatingCharacter('aabccdeff'); // should return 'b'
findFirstNonRepeatingCharacter('aabbcc'); // should return null
findFirstNonRepeatingCharacter('abcdef'); // should return 'a'
```

### Ограничения

- Входният низ ще съдържа само малки букви и интервали

### Подсказки

- Можете да използвате обект или Map, за да следите колко пъти се появява всеки символ в низа.
- Можете да обходите низа и да проверите дали текущият символ се е появил само веднъж.


### Тестови случаи

```js
test('Find First Non-Repeating Character', () => {
  expect(findFirstNonRepeatingCharacter('aabccdeff')).toBe('b');
  expect(findFirstNonRepeatingCharacter('aabbcc')).toBe(null);
  expect(findFirstNonRepeatingCharacter('hello world')).toBe('h');
});
```
