// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат
// с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.

// Например:

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries() {
  arr = [];
  for (let value of Object.values(salaries)) {
    arr.push(value); // John, затем 30
  }
  return arr.reduce((acc, val) => acc + val, 0);
}

console.log(sumSalaries(salaries)); // 650
