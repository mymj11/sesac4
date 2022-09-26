import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Event_ex from './ex/Event_ex';
import Practice from './Practice';
import Practice59 from './Practice59';
//지운 파일이나 빈 파일은 지워줘야 한다.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Event_ex />
    <Practice />
    <Practice59 />
  </React.StrictMode>
);


