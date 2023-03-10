// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять
// числовое значение и возвращать его.

// Например:

alert(extractCurrencyValue('$120') === 120); // true

function extractNumber(text) {
  return +text.slice(1);
}

console.log(extractNumber('$55521321132'));
