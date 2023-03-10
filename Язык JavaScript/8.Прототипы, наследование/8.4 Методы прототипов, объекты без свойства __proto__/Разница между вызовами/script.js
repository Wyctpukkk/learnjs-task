// Давайте создадим новый объект rabbit:

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};

let rabbit = new Rabbit('Rabbit');

// Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi(); // rabbit
Rabbit.prototype.sayHi(); // undefiend
Object.getPrototypeOf(rabbit).sayHi(); // undefiend
rabbit.__proto__.sayHi(); // undefiend
