# Предизвикателство: Изчисляване на общите продажби

## Инструкции

Използвайте дадения по-долу масив от обекти на продукти, всеки със своето име, цена и продадено количество. Освен това ви е даден данъчен процент. Напишете функция наречена `calculateTotalSalesWithTax`, която приема масив от обекти на продукти заедно с данъчния процент и връща общата сума на продажбите, включително данъка.

```js
const products = [
  { name: 'Apple', price: 0.5, quantity: 10 },
  { name: 'Banana', price: 0.3, quantity: 20 },
  { name: 'Orange', price: 0.6, quantity: 15 },
];
```

### Сигнатура на функцията

```js
/**
 * Calculates and returns the total sales amount including tax from the input array of products and tax rate.
 * @param {Object[]} products - The array of product objects.
 * @param {string} products[].name - The name of the product.
 * @param {number} products[].price - The price of the product.
 * @param {number} products[].quantity - The quantity sold of the product.
 * @param {number} taxRate - The tax rate as a percentage.
 * @returns {number} - The total sales amount including tax.
 */
function calculateTotalSalesWithTax(products: { name: string, price: number, quantity: number }[], taxRate: number): number;
```

### Примери

```js
calculateTotalSalesWithTax(
  [
    { name: 'Apple', price: 0.5, quantity: 10 },
    { name: 'Banana', price: 0.3, quantity: 20 },
    { name: 'Orange', price: 0.6, quantity: 15 },
  ],
  8
); // 21.6 (20 + 8% tax)

calculateTotalSalesWithTax(
  [
    { name: 'Chocolate', price: 2.5, quantity: 5 },
    { name: 'Chips', price: 1.2, quantity: 10 },
    { name: 'Soda', price: 1.0, quantity: 8 },
    { name: 'Candy', price: 0.5, quantity: 15 },
  ],
  5
); // 42 (40 + 5% tax)
```

### Ограничения

- Входният масив ще съдържа поне един обект на продукт.
- Стойностите на цената и количеството ще бъдат положителни числа.
- Данъчният процент ще бъде положително число, по-малко от 100.
- Закръглете до 2 десетични знака.

### Подсказки

- Изчислете общата сума на продажбите преди прилагане на данъка и след това добавете сумата на данъка към нея.

## Решения

<details>
  <summary>Натиснете за решение</summary>

Това решение изчислява общата сума на продажбите, включително данъка, като обхожда продуктите, сумира произведението на цената и количеството за всеки продукт и след това добавя сумата на данъка.

```js
const products = [
  { name: 'Apple', price: 0.5, quantity: 10 },
  { name: 'Banana', price: 0.3, quantity: 20 },
  { name: 'Orange', price: 0.6, quantity: 15 },
];

function calculateTotalSalesWithTax(products, taxRate) {

}
```

## Обяснение

- Изчислете общите продажби, като използвате метода `reduce` за обхождане на масива с продукти, сумирайки произведението на цената и количеството за всеки продукт.
- Изчислете сумата на данъка, като умножите общите продажби по данъчния процент и разделите на 100.
- Изчислете общите продажби, включително данъка, като съберете общите продажби и сумата на данъка.
- Върнете общите продажби, включително данъка.

</details>

### Тестови случаи

```js
test('Calculating total sales amount with tax', () => {
  expect(
    calculateTotalSalesWithTax(
      [
        { name: 'Apple', price: 0.5, quantity: 10 },
        { name: 'Banana', price: 0.3, quantity: 20 },
        { name: 'Orange', price: 0.6, quantity: 15 },
      ],
      8
    )
  ).toBe(21.6);

  expect(
    calculateTotalSalesWithTax(
      [
        { name: 'Chocolate', price: 2.5, quantity: 5 },
        { name: 'Chips', price: 1.2, quantity: 10 },
        { name: 'Soda', price: 1.0, quantity: 8 },
        { name: 'Candy', price: 0.5, quantity: 15 },
      ],
      5
    )
  ).toBe(42);
});
```

Не се колебайте да промените предизвикателството или тестовите случаи, ако е необходимо. Ако имате допълнителни въпроси или се нуждаете от допълнителна помощ, моля уведомете ме!
