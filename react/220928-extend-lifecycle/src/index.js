import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Practice62 from './Practice62';
import Ref from './Ref';
import ScrollBox from './ScrollBox';
import App2 from './App2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //불러오기.
  <React.StrictMode>
    <App />
    <Practice62 />
    <Ref />
    <Ref />
    <ScrollBox />
    <App2 />
  </React.StrictMode>
  //Ref 2번 불러왔다.
);
