import React from 'react';
import ReactDOM from 'react-dom';

const helloWorld = <p>Hello World</p>;

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(helloWorld, root);
