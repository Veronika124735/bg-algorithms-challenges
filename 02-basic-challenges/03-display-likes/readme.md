# Предизвикателство: Показване на харесвания

## Инструкции

Напишете функция `displayLikes`, която приема масив от имена и връща низ, описващ кой харесва публикацията.

Функцията трябва да връща низ в следния формат:

- Ако никой не харесва, трябва да върне `'no one likes this'`
- Ако един човек харесва, трябва да върне `'{name} likes this'`
- Ако двама души харесват, трябва да върне `'{name1} and {name2} like this'`
- Ако трима души харесват, трябва да върне `'{name1}, {name2} and {name3} like this'`
- Ако повече от трима души харесват, трябва да върне `'{name1}, {name2} and {x} others like this'`

### Сигнатура на функцията

```js
/**
 * Returns a string of who likes the post.
 * @param {string[]} names - The names of the people who like the post.
 * @returns {string} - A string of who likes the post.
 */
function displayLikes(names: string[]): string;
```

### Примери

```JS
displayLikes([]) // 'no one likes this'
displayLikes(['Peter']) // 'Peter likes this'
displayLikes(['Jacob', 'Alex']) // 'Jacob and Alex like this'
displayLikes(['Max', 'John', 'Mark']) // 'Max, John and Mark like this'
displayLikes(['Alex', 'Jacob', 'Mark', 'Max']) // 'Alex, Jacob and 2 others like this'
displayLikes(['Alex', 'Jacob', 'Mark', 'Max', 'Jill']) // 'Alex, Jacob and 3 others like this'
```

### Ограничения

- Входният масив ще съдържа само низове

### Обяснение

Това е доста просто, тъй като изисква само поредица от if условия. Бихме могли да използваме и switch конструкция, но тя би била малко по-многословна.

- Вземете дължината на масива и проверете дали е 0, 1, 2, 3 или повече. В зависимост от дължината връщаме подходящия низ.
- Ако има повече от 3 имена, връщаме първите две имена, а след това дължината минус 2 за броя на останалите.

</details>

### Тестови случаи

```js
test('Display Likes', () => {
  expect(displayLikes([])).toEqual('no one likes this');
  expect(displayLikes(['Peter'])).toEqual('Peter likes this');
  expect(displayLikes(['Jacob', 'Alex'])).toEqual('Jacob and Alex like this');
  expect(displayLikes(['Max', 'John', 'Mark'])).toEqual(
    'Max, John and Mark like this'
  );
  expect(displayLikes(['Alex', 'Jacob', 'Mark', 'Max'])).toEqual(
    'Alex, Jacob and 2 others like this'
  );
  expect(displayLikes(['Alex', 'Jacob', 'Mark', 'Max', 'Jill'])).toEqual(
    'Alex, Jacob and 3 others like this'
  );
});
```
