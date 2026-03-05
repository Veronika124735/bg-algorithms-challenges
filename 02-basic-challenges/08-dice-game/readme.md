# Предизвикателство: Симулация на игра с зарове

## Инструкции

Напишете функция `diceGameSimulation`, която симулира тази игра със зарове. Функцията трябва да приема един аргумент:

- `numSimulations`: Броят пъти, които да се симулира играта със зарове.

Правилата на играта са: ако се хвърли 7 или 11, играчът печели и получава резултат `win`. Ако се хвърлят 2, 3 или 12, играчът губи и получава резултат `lose`. При всяко друго число резултатът е `roll again`.

Функцията трябва да връща масив от обекти, където всеки обект представлява резултат от симулация. Всеки обект трябва да съдържа следните свойства:

- `dice1`: Стойността на първия зар (случайно число между 1 и 6).
- `dice2`: Стойността на втория зар (случайно число между 1 и 6).
- `sum`: Сумата на двата зара.
- `result`: Резултатът от хвърлянето, който може да бъде "win", "lose" или "roll again".

### Сигнатура на функцията

```js
/**
 * Simulates the dice game.
 * @param {number} numSimulations - The number of times to simulate the dice game.
 * @returns {Array} - An array of simulation result objects.
 */
function diceGameSimulation(numSimulations: number): Array;
```

### Пример

```js
console.log(diceGameSimulation(3));
/*
  { dice1: 1, dice2: 5, sum: 6, result: 'roll again' },
  { dice1: 5, dice2: 6, sum: 11, result: 'win' },
  { dice1: 1, dice2: 1, sum: 2, result: 'lose' }
*/
```

### Подсказки

- Можете да използвате функцията `Math.random()`, за да симулирате хвърляне на зар. Тя връща случайно число между 0 (включително) и 1 (изключително).

## Решение

<details>
  <summary>Натиснете за решение</summary>

```js
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function diceGameSimulation(numSimulations) {
  const results = [];

  for (let i = 0; i < numSimulations; i++) {

  }

  return results;
}

module.exports = diceGameSimulation;
```

### Обяснение

- Функцията `rollDice` симулира хвърляне на един зар. Тя използва `Math.random()`, за да генерира случайно десетично число между 0 (включително) и 1 (изключително), умножава го по 6, закръгля надолу и добавя 1, за да получи случайно число между 1 и 6.
- Функцията `diceGameSimulation` симулира играта със зарове за указания брой симулации. Тя използва функцията `rollDice`, за да генерира случайни стойности на заровете и изчислява сумата на двата зара.
- В зависимост от сумата, свойството `result` се определя според правилата на играта.
- Резултатите от всяка симулация се съхраняват в масив от обекти.
- Модулът експортира функцията `diceGameSimulation`, за да бъде достъпна в други файлове.

</details>

### Тестови случаи

```js
test('Dice Game Simulation', () => {
  const numSimulations = 5;
  const simulationResults = diceGameSimulation(numSimulations);

  simulationResults.forEach((result) => {
    console.log(`Simulation Result: ${result.finalResult}`);
    result.rolls.forEach((roll) => {
      console.log(
        `  Dice 1: ${roll.dice1}, Dice 2: ${roll.dice2}, Sum: ${roll.sum}, Result: ${roll.result}`
      );
    });
  });
});
```
