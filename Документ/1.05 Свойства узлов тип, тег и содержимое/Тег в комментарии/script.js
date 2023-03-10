// Что выведет этот код?

let body = document.body;

body.innerHTML = '<!--' + body.tagName + '-->';

alert(body.firstChild.data); // что выведет?
