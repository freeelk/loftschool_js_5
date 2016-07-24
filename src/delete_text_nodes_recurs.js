/*
Задание 3
 Реализиовать функцию, описанную в ДЗ 2, рекурсивно
 */

function deleteTextNodesRecurs(element) {
    let TEXT_NODE_TYPE = 3;

    let textNodes = [];

    for (let i=0; i< element.childNodes.length; i++) {
        if (element.childNodes[i].nodeType === TEXT_NODE_TYPE) {
            textNodes.push(element.childNodes[i]);
        } else {
            deleteTextNodesRecurs(element.childNodes[i])
        }
    }

    for (let i=0; i< textNodes.length; i++) {
        element.removeChild(textNodes[i]);
    }
}

module.exports = deleteTextNodesRecurs;