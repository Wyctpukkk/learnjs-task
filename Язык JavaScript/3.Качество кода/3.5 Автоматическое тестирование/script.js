// Что не так в нижеприведённом тесте функции pow?

it('Возводит x в степень n', function () {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

// все assert связаны, если 1 assert выдаст ошибку следующие не отработают, лучше разбить
// тест на 3 теста
