# Предизвикателство: Уникални ли са всички символи?

## Инструкции

Напишете функция `areAllCharactersUnique`, която приема низ и връща `true` или `false` в зависимост от това дали всички символи в низа са уникални (т.е. няма повтарящи се символи).

### Сигнатура на функцията

```js
/**
 * Returns true if all characters in a string are unique.
 * @param {string} str - The string to check.
 * @returns {boolean} - Whether all characters in the string are unique.
 */
function areAllCharactersUnique(str: string): boolean;
```

### Примери

```js
areAllCharactersUnique('abcdefg'); // true
areAllCharactersUnique('abcdefgA'); // true
areAllCharactersUnique('programming'); // false
areAllCharactersUnique(''); // true
areAllCharactersUnique('a'); // true
```

### Ограничения

- Функцията трябва да е чувствителна към регистъра, така че `a` и `A` се считат за различни символи
- Празен низ трябва да връща `true` по подразбиране

### Подсказки

- Можете да използвате for цикъл, за да обходите низа и да проверите дали текущият символ е в set-а или обекта.

### Тестови случаи

```js
test('Unique Characters in a String', () => {
  expect(areAllCharactersUnique('abcdefg')).toBe(true);
  expect(areAllCharactersUnique('abcdefgA')).toBe(true);
  expect(areAllCharactersUnique('programming')).toBe(false);
  expect(areAllCharactersUnique('')).toBe(true);
  expect(areAllCharactersUnique('a')).toBe(true);
});
```
