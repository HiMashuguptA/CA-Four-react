import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ParentContext from './UseContext/Parentcontext';
import './ques.css'
import './Result.css'

ReactDOM.render(
  <div>
    <ParentContext>
      <App />
    </ParentContext>
  </div>,
  document.getElementById('root')
);