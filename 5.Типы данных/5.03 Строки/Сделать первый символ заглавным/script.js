// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// Например:

ucFirst('вася') == 'Вася';

function upperCase(text) {
  result = text[0].toUpperCase() + text.slice(1, 4);
  return result;
}

console.log(upperCase('вася'));
