// Напишите функцию randomInteger(min, max), которая генерирует случайное
// целое (integer) число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.
// Пример работы функции:

function randomInteger(a, b) {
  return Math.floor((result = a + Math.random() * (b + 1 - a)));
}

console.log(randomInteger(1, 3)); // 1
console.log(randomInteger(1, 3)); // 3
console.log(randomInteger(1, 3)); // 5
