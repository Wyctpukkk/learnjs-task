// У нас есть массив строк arr. Нужно получить отсортированную копию,
// но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ['HTML', 'JavaScript', 'CSS'];

let sorted = copySorted(arr);

function copySorted(arr) {
  const result = arr.map((obj, index) => {
    return obj;
  });
  result.sort();
  return result;
}

console.log(copySorted(arr));

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)
