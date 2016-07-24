let prepend = require('./prepend.js');
let  deleteTextNodes = require('./delete_text_nodes.js');
let deleteTextNodesRecurs = require('./delete_text_nodes_recurs.js');
let scanDOM = require('./scan_dom');

let container = document.getElementById('container');

//----prepend() test

let newElement = document.createElement('div');
newElement.innerHTML = 'New element';
prepend(container, newElement);

//----deleteTextNodes() test

deleteTextNodes(container);

//----deleteTextNodesRecurs() test

//deleteTextNodesRecurs(container);

//----scanDOM() test

scanDOM();