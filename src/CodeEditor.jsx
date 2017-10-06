import React, { Component } from 'react';
import { observer } from 'mobx-react';
import CodeMirror from 'react-codemirror2';

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/turtle/turtle');
// import DevTools from 'mobx-react-devtools';

@observer
class CodeEditor extends Component {
  render() {
    return (
      <div>
        <CodeMirror
          value='<h1>I ♥ react-codemirror2</h1>'
          options={{
            mode: 'turtle',
            theme: 'material',
            lineNumbers: true
          }}
          onChange={(editor, metadata, value) => {
          }}
        />;
      </div>
    );
  }

  // onReset = () => {
  //   this.props.appState.resetTimer();
  // }
};

export default CodeEditor;
