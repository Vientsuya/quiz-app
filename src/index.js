import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QuizProvider } from './contexts/QuizContext';

ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
