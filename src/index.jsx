import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import App from './App';
import CodeEditor from './CodeEditor';

// const appState = new AppState();
require("codemirror/lib/codemirror.css");
require("codemirror/theme/material.css");

render(
  <CodeEditor />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./CodeEditor', () => {
    const NextApp = require('./CodeEditor').default;

    render(
      <CodeEditor />,
      document.getElementById('root')
    );
  });
}
