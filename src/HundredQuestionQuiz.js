import React, { useState } from "react";

const HundredQuestionQuiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setIsAnswerCorrect(answer === currentQuestion.correctAnswer);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswerCorrect(null);
    } else {
      // Handle the end of the quiz
    }
  };

  return (
    <div>
      <h1>Total questions: {questions.length}</h1>
      <h1>Question number: {currentQuestionIndex + 1}</h1>

      <h2>{currentQuestion.question}</h2>
      {currentQuestion.answers.map((answer, index) => (
        <button key={index} onClick={() => handleAnswer(answer)}>
          {answer}
        </button>
      ))}
      {selectedAnswer && (
        <p>
          {isAnswerCorrect ? "Correct answer!" : "Wrong answer, try again."}
        </p>
      )}
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  );
};

export default HundredQuestionQuiz;
