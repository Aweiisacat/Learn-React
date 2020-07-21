import React from 'react';
import ReactDOM from 'react-dom';

// <input id='input' type='number' >

const e = React.createElement('input', {
  id: 'input',
  type: 'number',
  readOnly: true,
  className: 'input',
  htmlFor: 'input',
});

const root = document.getElementById('root');

ReactDOM.render(e, root);
