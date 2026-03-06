# Предизвикателство: Генератор на хаштагове

## Инструкции

Напишете функция наречена `generateHashtag`, която приема низ като вход и връща генериран хаштаг низ според правилата по-долу. Ако генерираният хаштаг низ е по-дълъг от 140 символа или входът/резултатът е празен низ, функцията трябва да върне `false`.

### Сигнатура на функцията

```js
/**
 * Generates a hashtag from the input string.
 * @param {string} str - The input string.
 * @returns {string|boolean} - The generated hashtag string or false.
 */
function generateHashtag(str: string): string | boolean;
```

### Примери

```JS
generateHashtag("JavaScript is awesome"); // "#JavaScriptIsAwesome"
generateHashtag("hello world"); // "#HelloWorld"
generateHashtag("This is a very very very very very very very very very very very very very very long input that should result in a false hashtag because it exceeds the character limit of 140"); // false
generateHashtag(""); // false
```

### Ограничения

- Върнете `false`, ако входният низ е празен или съдържа само интервали.
- Върнете `false`, ако генерираният хаштаг низ е по-дълъг от 140 символа.
- Всяка дума в хаштага трябва да започва с главна буква.
- Входният низ може да съдържа водещи/завършващи интервали.

### Подсказки

- Можете да използвате методите за работа с низове `trim()`, `split()` и `join()`, за да обработите входния низ.
- Можете да използвате метода `charAt()`, за да получите символа на определен индекс.
- Използвайте методи за низове, за да направите първата буква на всяка дума главна.
