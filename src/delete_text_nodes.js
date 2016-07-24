/*
Задание 2

 Создать модуль, который экспортирует функцию `deleteTextNodes`
 Эта функция принимает на вход элемент и должна удалить все текстовые узлы внутри указанного элемента.
 Функция может работать не рекурсивно, то есть не заходить внутрь дочерних элементов контейнера.
 */



function deleteTextNodes(element) {
    let TEXT_NODE_TYPE = 3;

    let textNodes = [];

    for (let i=0; i< element.childNodes.length; i++) {
        if (element.childNodes[i].nodeType === TEXT_NODE_TYPE) {
            textNodes.push(element.childNodes[i]);
        }
    }

    for (let i=0; i< textNodes.length; i++) {
        element.removeChild(textNodes[i]);
    }
}

module.exports = deleteTextNodes;