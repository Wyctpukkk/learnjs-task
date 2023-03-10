// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

let schedule = {};

alert(isEmpty(schedule)); // true

schedule['8:30'] = 'get up';

alert(isEmpty(schedule)); // false

const obj = {};

const isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
};

console.log(isEmpty(obj));
obj['name'] = 'Jhon';
console.log(isEmpty(obj));
