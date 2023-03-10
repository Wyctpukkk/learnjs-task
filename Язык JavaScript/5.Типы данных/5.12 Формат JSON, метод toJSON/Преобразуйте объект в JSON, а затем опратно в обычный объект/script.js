// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: 'Василий Иванович',
  age: 35,
};
console.log(JSON.stringify(user));
console.log(JSON.parse(JSON.stringify(user)));
