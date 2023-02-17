// У нас есть объект, в котором хранятся зарплаты нашей команды:
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const summ = (obj) => {
  result = 0;
  for (key in obj) {
    result += obj[key];
  }
  return result;
};

console.log(summ(salaries));
