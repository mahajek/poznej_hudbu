import React, { useState } from 'react';
import './style.css';

export const Kviz = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < props.otazky.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="kviz">
      {showScore ? (
        <div className="score-section">
          Máš {score} bodů z {props.otazky.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Otázka {currentQuestion + 1}</span>/{props.otazky.length}
            </div>
            <div className="otazka">
              {props.otazky[currentQuestion].questionText}
            </div>
            <div className="obrazek">{props.otazky.obrazek}</div>
          </div>

          <div className="answer-section">
            {props.otazky[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className="tlacitko-kviz"
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                key={answerOption.answerText}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
