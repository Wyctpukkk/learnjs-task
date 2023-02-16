// Рассмотрим следующий код:

// const birthday = '18.04.1982';

// const age = someCode(birthday);
// У нас есть константа birthday, а также age, которая вычисляется при помощи некоторого кода, используя значение из birthday (в данном случае детали не имеют значения, поэтому код не рассматривается).

// Можно ли использовать заглавные буквы для имени birthday? А для age? Или одновременно для обеих переменных?

const BIRTHDAY = '18.04.1982'; // использовать заглавные буквы?  //  Можно т.к. заранее известна, но не нужно

const AGE = someCode(BIRTHDAY); // а здесь?   // Нельзя так как вычисляется
