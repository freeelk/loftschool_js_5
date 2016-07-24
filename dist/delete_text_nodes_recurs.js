"use strict";

/*
Задание 3
 Реализиовать функцию, описанную в ДЗ 2, рекурсивно
 */

function deleteTextNodesRecurs(element) {
    var TEXT_NODE_TYPE = 3;

    var textNodes = [];

    for (var i = 0; i < element.childNodes.length; i++) {
        if (element.childNodes[i].nodeType === TEXT_NODE_TYPE) {
            textNodes.push(element.childNodes[i]);
        } else {
            deleteTextNodesRecurs(element.childNodes[i]);
        }
    }

    for (var _i = 0; _i < textNodes.length; _i++) {
        element.removeChild(textNodes[_i]);
    }
}

module.exports = deleteTextNodesRecurs;