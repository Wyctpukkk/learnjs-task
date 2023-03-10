// Что выведет код ниже?

alert(alert(1) || 2 || alert(3)); // вызовет alert(1), alert вернет undefined, затем вызовет alert(2)
