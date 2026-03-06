# Предизвикателство: Валидиране на парола

## Инструкции

Напишете функция наречена `validatePassword`, която приема низ и го валидира по следните критерии:

1. Паролата трябва да е с дължина поне 8 символа.
2. Паролата трябва да съдържа поне една главна буква.
3. Паролата трябва да съдържа поне една малка буква.
4. Паролата трябва да съдържа поне една цифра.

Функцията трябва да връща `true`, ако паролата е валидна според критериите, и `false` в противен случай.

### Сигнатура на функцията

```js
/**
 * Validates a password based on certain criteria.
 * @param {string} password - The password to be validated.
 * @returns {boolean} - True if the password is valid, false otherwise.
 */
function validatePassword(password: string): boolean;
```

### Примери

```js
validatePassword('Abc12345'); // should return true
validatePassword('password123'); // should return false (no uppercase letter)
validatePassword('Pass'); // should return false (length less than 8 characters)
validatePassword('HelloWorld'); // should return false (no digit)
```

### Ограничения

- Входната парола може да съдържа произволна комбинация от букви и цифри.
- Входната парола може да съдържа както главни, така и малки букви.

### Подсказки

- Можете да използвате функцията `split`, за да преобразувате низа в масив от символи, и след това да използвате функцията `some`, за да проверите дали поне един символ отговаря на определено условие.

### Обяснение

- Създайте променлива наречена `isLengthValid` и й задайте стойност `true`, ако паролата е с дължина поне 8 символа, и `false` в противен случай.
- Създайте променлива наречена `hasUppercase` и й задайте стойност `true`, ако паролата съдържа поне една главна буква, и `false` в противен случай.
- Създайте променлива наречена `hasLowercase` и й задайте стойност `true`, ако паролата съдържа поне една малка буква, и `false` в противен случай.
- Създайте променлива наречена `hasDigit` и й задайте стойност `true`, ако паролата съдържа поне една цифра, и `false` в противен случай.
- Върнете резултата от израза `isLengthValid && hasUppercase && hasLowercase && hasDigit`.

Функцията `some` се използва за проверка дали поне един символ в паролата отговаря на определено условие. Функцията `some` приема callback функция като аргумент. Callback функцията се извиква за всеки символ в паролата. Ако callback функцията върне `true` за поне един символ, тогава функцията `some` връща `true`. В противен случай функцията `some` връща `false`.

</details>

### Тестови случаи

```js
test('Password Validation', () => {
  expect(validatePassword('Abc12345')).toBe(true);
  expect(validatePassword('password123')).toBe(false);
  expect(validatePassword('Pass')).toBe(false);
  expect(validatePassword('HelloWorld')).toBe(false);
});
```
