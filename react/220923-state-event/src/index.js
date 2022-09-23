import React from 'react';
import ReactDOM from 'react-dom/client';
import StateClass from './StateClass';
import StateFunction from './StateFunction';
import StateFunction2 from './StateFunction2';
import StateClass2 from './StateClass2';
import Handler_ex from './ex/Handler_ex';
import Event from './Event';
import EvnetClass from './EventClass';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateClass />
    <StateFunction />
    <StateFunction2 />
    <StateClass2 />
    <Handler_ex />
    <Event />
    <EvnetClass />
  </React.StrictMode>
);


// reportWebVitals();
