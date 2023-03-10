// Анаграммы – это слова, у которых те же буквы в том же количестве,
// но они располагаются в другом порядке.

// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// Например:

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

function aclean(arr) {
  keys = {};
  result = [];
  arr.map((obj, id) => {
    return (keys[obj.toLowerCase().split('').sort().join('')] = obj);
  });
  for (word in keys) {
    result.push(keys[word]);
  }
  return result;
}

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
