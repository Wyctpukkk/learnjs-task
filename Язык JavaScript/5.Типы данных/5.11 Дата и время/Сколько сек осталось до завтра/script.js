// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день,
// т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToTommorow() {
  let currentTime = new Date();

  let nextDayTime = new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate() + 1
  );

  return (result = `До следующего дня осталось ${
    (nextDayTime - currentTime) / 1000
  } сек`);
}

console.log(getSecondsToTommorow());
