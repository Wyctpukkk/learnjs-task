// У нас есть дерево, структурированное как вложенные списки ul/li.

// Напишите код, который выведет каждый элемент списка <li>:

// Какой в нём текст (без поддерева) ?

// Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?

const items = document.querySelectorAll('li');
items.forEach((obj, id) => {
  let title = obj.firstChild.data;

  // считаем количество потомков
  let count = obj.getElementsByTagName('li').length;

  alert(title + ': ' + count);
});
