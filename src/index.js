import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MyCounter from '../components/MyCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <App />
      <MyCounter />
    </>
  );