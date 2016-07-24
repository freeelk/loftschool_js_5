'use strict';

/*
 4 (со звездочкой)
 Создать модуль, который экспортирует функцию `scanDOM`.
 `scanDOM` должна перебирать все узлы на странице и выводить в консоль статистику по элементам и классам на странице. Например:
 Тэгов div: 10
 Тэгов a: 5
 Тэгов span: 10
 Текстовых узлов: 100
 Элементов с классом c1: 10
 Элементов с классом c2: 20
 */

function scanDOM() {
    var ELEMENT_NODE_TYPE = 1;

    var accumulator = {
        nodeTypes: {},
        tagNames: {},
        classNames: {}
    };

    walk(document.body);
    view();

    function walk(element) {
        for (var i = 0; i < element.childNodes.length; i++) {
            count(element.childNodes[i]);
            if (getNodeTypeStr(element.childNodes[i].nodeType) === 'ELEMENT_NODE') {
                walk(element.childNodes[i]);
            }
        }
    }

    function count(node) {
        addStatistics('nodeTypes', getNodeTypeStr(node.nodeType));
        if (getNodeTypeStr(node.nodeType) === 'ELEMENT_NODE') {
            addStatistics('tagNames', node.tagName);
            countElemClasses(node);
        }
    }

    function countElemClasses(elem) {
        var classList = elem.classList;

        for (var i = 0; i < classList.length; i++) {
            addStatistics('classNames', classList[i]);
        }
    }

    function addStatistics(section, item) {
        if (accumulator[section].hasOwnProperty(item)) {
            accumulator[section][item]++;
        } else {
            accumulator[section][item] = 1;
        }
    }

    function getNodeTypeStr(nodeType) {
        var nodeTypes = {};
        nodeTypes['1'] = 'ELEMENT_NODE';
        nodeTypes['3'] = 'TEXT_NODE';
        nodeTypes['7'] = 'PROCESSING_INSTRUCTION_NODE';
        nodeTypes['8'] = 'COMMENT_NODE';
        nodeTypes['9'] = 'DOCUMENT_NODE';
        nodeTypes['10'] = 'DOCUMENT_TYPE_NODE';
        nodeTypes['10'] = 'DOCUMENT_FRAGMENT_NODE';

        return nodeTypes[nodeType] || nodeType;
    }

    function view() {
        console.log('Количество типов узлов');
        for (var prop in accumulator.nodeTypes) {
            console.log(prop + ": " + accumulator.nodeTypes[prop]);
        }

        console.log('Количество классов:');
        for (var prop in accumulator.classNames) {
            console.log(prop + ": " + accumulator.classNames[prop]);
        }

        console.log('Количесво тегов:');
        for (var prop in accumulator.tagNames) {
            console.log(prop + ": " + accumulator.tagNames[prop]);
        }
    }
}

module.exports = scanDOM;