# Предизвикателство: Валидиране на имейл

## Инструкции

Напишете функция `validateEmail`, която приема низ и връща дали низът е валиден имейл адрес. За целите на това предизвикателство, валиден имейл адрес се дефинира като низ, съдържащ символ `@` и символ `.`.

### Сигнатура на функцията

```js
/**
 * Returns whether the string is a valid email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Whether the email address is valid.
 */
function validateEmail(email: string): boolean;
```

### Примери

```js
validateEmail('john@gmail.com'); // true
validateEmail('john@gmail'); // false
```

### Подсказки

- Ако познавате регулярни изрази, това е чудесно място да ги използвате. Ще ви дам две решения. Едното използва регулярни изрази, а другото не.

### Тестови случаи

```js
test('Valid Email Addresses', () => {
  expect(validateEmail('john@example.com')).toBe(true);
  expect(validateEmail('jane.doe@domain.org')).toBe(true);
});

test('Invalid Email Addresses', () => {
  expect(validateEmail('invalid-email')).toBe(false);
  expect(validateEmail('@domain.com')).toBe(false);
  expect(validateEmail('user@domain')).toBe(false);
});
```
