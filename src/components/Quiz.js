import { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../contexts/QuizContext';
import Question from './Question';
import { DIFFICULTY, fetchQuestions } from '../API';
import { shuffleAnswers } from '../utils';
import { Card } from '../styled-components/MainStyles';

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchQuestions(10, DIFFICULTY.EASY).then(data => {
      quizState.questions = data.results;
      quizState.answers = shuffleAnswers(quizState.questions[0]);
      setIsLoading(false);
    }); //eslint-disable-next-line
  }, []);

  return (
    <Card>
      {!isLoading && (
        <>
          {quizState.showResults && (
            <div className="container">
              <div className="result">
                <div className="result-msg">Well Done!</div>
                <div className="result-details">
                  You've got {quizState.correctAnswers} /{' '}
                  {quizState.questions.length} points!
                </div>
                <div
                  className="next-btn"
                  onClick={() => dispatch({ type: 'RESTART' })}
                >
                  Try Again
                </div>
              </div>
            </div>
          )}
          {!quizState.showResults && (
            <div className="container">
              <div className="score">Score: {quizState.correctAnswers}</div>
              <Question />
              <div
                className="next-btn"
                onClick={() => dispatch({ type: 'NEXT' })}
              >
                Next
              </div>
            </div>
          )}
        </>
      )}
      {isLoading && <div>Loading...</div>}
    </Card>
  );
};

export default Quiz;
