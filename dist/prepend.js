"use strict";

/*
Задание 1

 Создать модуль, который экспортирует функцию `prepend`
 prepend имеет два параметра, в которые нужно передать элементы
 Задача функции - вставить второй элемент в начало первого. Например:
 `prepend(container, newElement)` - newElement должен быть добавлен в начало элемента container.
 */

function prepend(container, newElement) {
  container.insertBefore(newElement, container.firstChild);
}

module.exports = prepend;