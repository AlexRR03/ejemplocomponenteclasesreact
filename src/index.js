import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contador from './components/Contador';
import DibujosComplejos from './components/DibujosComplejos';
import DibujoComplejosReact from './components/DibujoComplejosReact';
import PadreDeportes from './components/PadreDeportes';
import PadreNumeros from './components/PadreNumeros';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PadreNumeros />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
