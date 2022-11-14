import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './test';


const root = ReactDOM.createRoot(document.getElementById('root'));

let load;

switch(window.location.pathname){
  case "/":
    load=<App/>;
    break;
  case "/test":
    load=<Test/>;
    break;
  default:
    load=<App/>;
    break;
}

root.render(
  <React.StrictMode>
    {load}
  </React.StrictMode>
);
