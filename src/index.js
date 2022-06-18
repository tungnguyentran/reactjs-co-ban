import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const user = {
  firstName: "Tung",
  lastName: "Nguyen"
}

function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}

const myStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

const element = (
  <h1>Hello, {formatName(user)}</h1>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div style={{
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
}} children={<div className='white'></div>} className='black'></div>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
