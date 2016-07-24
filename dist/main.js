'use strict';

var prepend = require('./prepend.js');
var deleteTextNodes = require('./delete_text_nodes.js');
var deleteTextNodesRecurs = require('./delete_text_nodes_recurs.js');
var scanDOM = require('./scan_dom');

var container = document.getElementById('container');

//----prepend() test

var newElement = document.createElement('div');
newElement.innerHTML = 'New element';
prepend(container, newElement);

//----deleteTextNodes() test

deleteTextNodes(container);

//----deleteTextNodesRecurs() test

//deleteTextNodesRecurs(container);

//----scanDOM() test

scanDOM();