// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm".
// А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"
console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));

function formatDate(date) {
  let difference = new Date() - date;
  if (difference < 1000) {
    return 'прямо сейчас';
  }

  if (Math.floor(difference / 1000) < 60) {
    return Math.floor(difference / 1000) + ' сек. назад';
  }

  if (Math.floor(difference / 60000) < 60) {
    return Math.floor(difference / 60000) + ' мин. назад';
  }
  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes(),
  ].map((obj, id) => obj.slice(-2));

  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"
console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"
// вчерашняя дата
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
