import { StrictMode } from 'react';
import { render as Render } from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// GLOBAL STYLES
import '@/assets/scss/app.scss';

Render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

const isProd = process.env.NODE_ENV === 'production';
!isProd && reportWebVitals(console.log);
