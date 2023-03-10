// У нас есть пустой DOM-элемент elem и строка text.

// Какие из этих 3-х команд работают одинаково?

// elem.append(document.createTextNode(text))
// elem.innerHTML = text
// elem.textContent = text

все три элемента добавят 'text', хотя в решении указано что 2 тип добавит не текст,
и почему-то приведен пример с let text = '<b>текст</b>';, хотя в вопросе этого не было