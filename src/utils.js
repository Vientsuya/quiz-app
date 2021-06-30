export const shuffleAnswers = question => {
  const allAnswers = [...question.incorrect_answers, question.correct_answer];

  return allAnswers
    .map(answer => ({ sort: Math.random(), value: answer }))
    .sort((a, b) => a.sort - b.sort)
    .map(obj => obj.value);
};

export const htmlDecode = input => {
  const parser = new DOMParser().parseFromString(input, 'text/html');
  return parser.documentElement.textContent;
};
