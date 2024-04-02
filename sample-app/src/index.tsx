import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UIProvider, extendTheme } from '@yamada-ui/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const customTheme = extendTheme({
  spaces: {
    xs: "1rem",
    sm: "1.25rem",
    md: "1.5rem",
    normal: "2rem",
    lg: "2.5rem",
    xl: "3rem",
  },
})();

root.render(
  <UIProvider theme={customTheme} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UIProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
