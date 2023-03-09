// Посмотрите на код. Какой будет результат у вызова на последней строке?

let phrase = 'Hello';

if (true) {
  let user = 'John';

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();

//  функция объявлена внутри if, ее нет в глобальной области видимости
