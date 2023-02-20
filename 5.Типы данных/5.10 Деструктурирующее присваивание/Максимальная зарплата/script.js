// У нас есть объект salaries с зарплатами:
let salaries = {
  John: 1010,
  Pete: 300,
  Pete2: 400,
  Pete3: 600,
  Mary: 250,
};
// Создайте функцию topSalary(salaries),
// которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
function topSalary(obj) {
  info = [];
  for (let [name, value] of Object.entries(obj)) {
    info.push({ name: name, value: value });
  }
  info.sort((a, b) => (a.value > b.value ? -1 : 1));

  return info[0].name;
}

console.log(topSalary(salaries));
