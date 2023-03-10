// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив,
// содержащий только уникальные элементы arr.

// Например:
let strings = [
  'кришна',
  'кришна',
  'харе',
  'харе',
  'харе',
  'харе',
  'кришна',
  'кришна',
  ':-O',
];

function unique(arr) {
  result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
      console.log(arr[i]);
    }
  }
  return result;
}

console.log(unique(strings)); // кришна, харе, :-O
