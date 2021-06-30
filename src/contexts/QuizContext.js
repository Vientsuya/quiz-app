import { createContext, useReducer } from 'react';
import { shuffleAnswers } from '../utils';

const initialState = {
  questions: undefined,
  curQuestionNum: 0,
  showResults: false,
  correctAnswers: 0,
  answers: undefined,
  selectedAnswer: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT': {
      const showResults = state.curQuestionNum === state.questions.length - 1;
      const curQuestionNum = showResults
        ? state.curQuestionNum
        : state.curQuestionNum + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[curQuestionNum]);
      return {
        ...state,
        curQuestionNum,
        showResults,
        answers,
        selectedAnswer: '',
      };
    }
    case 'RESTART': {
      return initialState;
    }
    case 'ANSWER_CLICK': {
      const correctAnswers =
        action.payload === state.questions[state.curQuestionNum].correct_answer
          ? state.correctAnswers + 1
          : state.correctAnswers;
      return {
        ...state,
        selectedAnswer: action.payload,
        correctAnswers,
      };
    }
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
