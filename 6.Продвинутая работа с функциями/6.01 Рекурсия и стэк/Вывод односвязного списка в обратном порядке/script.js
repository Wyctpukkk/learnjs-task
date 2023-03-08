// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// цикл
function cycle(list) {
  let arr = [];
  let fiat = list;

  while (fiat) {
    arr.push(fiat.value);
    fiat = fiat.next;
  }

  arr.reverse().forEach((obj, _) => {
    console.log(obj);
  });
}

cycle(list);

// рекурсия
function reverse(list) {
  if (list.next) {
    reverse(list.next);
  }

  console.log(list.value);
}

reverse(list);
