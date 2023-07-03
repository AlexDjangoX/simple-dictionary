import React from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import App from './components/App';

ReactDom.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
