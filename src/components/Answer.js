import { htmlDecode } from '../utils';

const Answer = ({
  answerText,
  index,
  onSelectAnswer,
  correctAnswer,
  selectedAnswer,
}) => {
  const isAnswerCorrect = selectedAnswer && answerText === correctAnswer;
  const isAnswerWrong =
    selectedAnswer === answerText && selectedAnswer !== correctAnswer;

  const correctAnswerClass = isAnswerCorrect ? 'correct-answer' : '';
  const wrongAnswerClass = isAnswerWrong ? 'wrong-answer' : '';
  const disabledClass = selectedAnswer ? 'disabled-answer' : '';

  let elo = htmlDecode(answerText);

  return (
    <div
      className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={() => onSelectAnswer(answerText)}
    >
      <div className="answer-text">{elo}</div>
    </div>
  );
};

export default Answer;
