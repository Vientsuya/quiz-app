import { useContext } from 'react';
import { QuizContext } from '../contexts/QuizContext';
import Answer from './Answer';
import { htmlDecode } from '../utils';

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.curQuestionNum];

  return (
    <>
      <div className="question-text">
        {htmlDecode(currentQuestion.question)}
      </div>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <Answer
            key={index}
            answerText={answer}
            index={index}
            selectedAnswer={quizState.selectedAnswer}
            correctAnswer={currentQuestion.correct_answer}
            onSelectAnswer={answerText =>
              dispatch({ type: 'ANSWER_CLICK', payload: answerText })
            }
          />
        ))}
      </div>
    </>
  );
};

export default Question;
