"use strict";

/*
Задание 2

 Создать модуль, который экспортирует функцию `deleteTextNodes`
 Эта функция принимает на вход элемент и должна удалить все текстовые узлы внутри указанного элемента.
 Функция может работать не рекурсивно, то есть не заходить внутрь дочерних элементов контейнера.
 */

function deleteTextNodes(element) {
    var TEXT_NODE_TYPE = 3;

    var textNodes = [];

    for (var i = 0; i < element.childNodes.length; i++) {
        if (element.childNodes[i].nodeType === TEXT_NODE_TYPE) {
            textNodes.push(element.childNodes[i]);
        }
    }

    for (var _i = 0; _i < textNodes.length; _i++) {
        element.removeChild(textNodes[_i]);
    }
}

module.exports = deleteTextNodes;