import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const loginname = "Malligarjunan";
const element = <h1 class="headerclass">Welcome, {loginname} !!!</h1>;

ReactDOM.render(element,document.getElementById('headermenu'));

const elementleftTreeItems = <h2 class="leftbarclass"> This is Left Bar </h2>
ReactDOM.render(elementleftTreeItems,document.getElementById('leftbar'));

const elemenfootertext = <h1 class="footerclass"> Copyright @2020 </h1>;

ReactDOM.render(elemenfootertext,document.getElementById('footermenu'));


/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
