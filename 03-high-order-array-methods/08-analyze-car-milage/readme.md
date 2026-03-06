# Предизвикателство: Анализ на пробега на автомобили

## Инструкции

Даден ви е масив от обекти за автомобили, всеки от които съдържа информация за марката, модела, годината и пробега на автомобила. Вашата цел е да извършите анализ на данните за пробега, използвайки функции от висок ред за масиви.

Имплементирайте функция наречена `analyzeCarMileage`, която приема масив от обекти за автомобили и изпълнява следните задачи:

1. Изчислява средния пробег на всички автомобили.
2. Намира автомобила с най-висок пробег.
3. Намира автомобила с най-нисък пробег.
4. Изчислява общия пробег на всички автомобили.

Функцията трябва да върне обект, съдържащ изчислените стойности като свойства.

Ето обект, който можете да използвате за тестване на функцията в run файла:

```js
const cars = [
  { make: 'Toyota', model: 'Camry', year: 2020, mileage: 30800 },
  { make: 'Honda', model: 'Civic', year: 2019, mileage: 32000 },
  { make: 'Chevrolet', model: 'Impala', year: 2021, mileage: 17500 },
  { make: 'Audi', model: 'R8', year: 2020, mileage: 13000 },
  { make: 'Tesla', model: 'Model 3', year: 2018, mileage: 50000 },
];
```

### Сигнатура на функцията

```js
/**
 * Analyzes car mileage data using high order array methods.
 * @param {Array} cars - An array of car objects.
 * @returns {Object} - An object containing calculated values.
 */
function analyzeCarMileage(cars: object[]): object;
```

Всеки обект за автомобил ще има следните свойства:

- `make`: Марката на автомобила (низ).
- `model`: Моделът на автомобила (низ).
- `year`: Годината на производство на автомобила (число).
- `mileage`: Пробегът на автомобила (число).

### Примери

```js
const cars = [
  { make: 'Toyota', model: 'Corolla', year: 2020, mileage: 25000 },
  { make: 'Honda', model: 'Civic', year: 2019, mileage: 30000 },
  { make: 'Ford', model: 'Mustang', year: 2021, mileage: 15000 },
];

const analysis = analyzeCarMileage(cars);
console.log(analysis);
// Output:
// {
//   averageMileage: 23333.33,
//   highestMileageCar: { make: "Honda", model: "Civic", year: 2019, mileage: 30000 },
//   lowestMileageCar: { make: "Ford", model: "Mustang", year: 2021, mileage: 15000 },
//   totalMileage: 70000
// }
```

### Ограничения

- Входният масив `cars` ще съдържа най-много 100 обекта за автомобили.
- Свойството `mileage` на всеки обект за автомобил ще бъде положително цяло число.
- Резултатът трябва да бъде закръглен до 2 знака след десетичната запетая.

### Подсказки

- Можете да използвате метода `reduce` за повечето от изчисленията.

## Решение

<details>
  <summary>Натиснете за решение</summary>

```js
function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((sum, car) => sum + car.mileage, 0);
  const averageMileage = totalMileage / cars.length;
...
}
```

### Обяснение

- Създайте променлива `totalMileage` и я инициализирайте с резултата от извикването на метода `reduce` върху масива `cars`. Акумулаторът трябва да бъде сумата на акумулатора и пробега на автомобила. Началната стойност `0` ще бъде използвана като начална стойност на акумулатора.
- Създайте променлива `averageMileage` и я инициализирайте с резултата от делението на `totalMileage` на дължината на масива `cars`.
- Създайте променлива `highestMileageCar` и я инициализирайте с резултата от извикването на метода `reduce` върху масива `cars`. Акумулаторът трябва да бъде автомобилът с най-висок пробег. Началната стойност `cars[0]` ще бъде използвана като начална стойност на акумулатора.
- Създайте променлива `lowestMileageCar` и я инициализирайте с резултата от извикването на метода `reduce` върху масива `cars`. Акумулаторът трябва да бъде автомобилът с най-нисък пробег. Началната стойност `cars[0]` ще бъде използвана като начална стойност на акумулатора.
- Върнете обект, съдържащ изчислените стойности. Закръглете `averageMileage` до 2 знака след десетичната запетая, използвайки метода `toFixed`, и го преобразувайте в число с метода `parseFloat`.

Знам, че `reduce` може да бъде малко труден за разбиране, затова нека го разгледаме подробно за променливата `highestMileageCar`. Ето кода отново за справка:

```js
const highestMileageCar = cars.reduce(
  (highest, car) => (car.mileage > highest.mileage ? car : highest),
  cars[0]
);
```

1. `reduce` приема два основни аргумента: функция и начална стойност. Началната стойност е зададена на `cars[0]`, което е първият автомобил в списъка.
2. Функцията приема два параметъра: `highest` и `car`. `highest` първоначално съдържа първия автомобил, а `car` е следващият автомобил в списъка.
3. За всеки автомобил функцията сравнява пробега на текущия автомобил `car.mileage` с пробега на автомобила, който е бил считан за най-висок до момента `highest.mileage`.
4. Ако пробегът на текущия автомобил е по-голям, заменяме стойността на `highest` с текущия автомобил.
5. Ако пробегът на текущия автомобил не е по-голям, оставяме автомобила, който сме смятали за най-добър до момента (highest).
6. Този процес се повтаря за всеки автомобил в списъка.

Каквото върнем от callback функцията на метода `reduce`, ще бъде новата стойност на акумулатора.

</details>

### Тестови случаи

```js
test('Analyzing Car Mileage Data', () => {
  const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2020, mileage: 25000 },
    { make: 'Honda', model: 'Civic', year: 2019, mileage: 30000 },
    { make: 'Ford', model: 'Mustang', year: 2021, mileage: 15000 },
  ];

  const analysis = analyzeCarMileage(cars);

  expect(analysis.averageMileage).toBeCloseTo(23333.33);
  expect(analysis.highestMileageCar).toEqual({
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    mileage: 30000,
  });
  expect(analysis.lowestMileageCar).toEqual({
    make: 'Ford',
    model: 'Mustang',
    year: 2021,
    mileage: 15000,
  });
  expect(analysis.totalMileage).toBe(70000);
});
```

Не се колебайте да добавите повече тестови случаи, за да проверите коректността на вашата функция `analyzeCarMileage`.
