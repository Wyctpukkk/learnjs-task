// Напишите функцию getSecondsToday(),
// возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е.
// в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday() {
  let currentTime = new Date();

  let startDayTime = new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate()
  );

  return (result = `Прошло ${
    (currentTime - startDayTime) / 1000
  } сек с начала дня`);
}

console.log(getSecondsToday());
