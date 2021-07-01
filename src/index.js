import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QuizProvider } from './contexts/QuizContext';
import GlobalStyle from './styled-components/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
      <GlobalStyle />
      <App />
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
