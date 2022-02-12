import React from 'react';
import ReactDOM from 'react-dom';
import '@/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// GLOBAL STYLES
import '@/assets/scss/app.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const isProd = process.env.NODE_ENV === 'production';
!isProd && reportWebVitals(console.log);
