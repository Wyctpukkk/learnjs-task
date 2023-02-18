// Каков результат? Почему?

let arr = ['a', 'b'];

arr.push(function () {
  alert(this);
});

arr[2](); // ['a','b',funcrtion()] по скольку массив является object и мы создали метод как в объекте
