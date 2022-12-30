import React, { useState } from 'react';
import questions from './questions';
import Result from './components/Result';

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [theme, setTheme] = useState(true);

  const handleAnswerOptionClick = isCorrect => {
    if (isCorrect) setScore(score + 1);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) setCurrentQuestion(nextQuestion);
    else setShowScore(true);
  };
  function giveOptions(answerOption) {
    return (
      <button
        // className=
        key={answerOption.id}
        onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
      >
        {answerOption.text}
      </button>
    );
  }
  const handleToggle = () => {
    setTheme(theme ? false : true);
  };
  function backGroundColors(color) {
    document.body.style.backgroundColor = color ? '#252d4a' : '#6da7d3';
    return {
      backgroundColor: color ? '#6da7d3' : '#6da7d3',
    };
  }
  function handleFocus() {
    document.querySelector('.question-text').style.color = '#252d4a';
  }

  function handleNoFocus() {
    document.querySelector('.question-text').style.color = 'white';
  }

  return (
    <div className="app" style={backGroundColors(theme)}>
      {showScore ? (
        <Result
          setScore={setScore}
          score={score}
          setCurrentQuestion={setCurrentQuestion}
          setShowScore={setShowScore}
          length={questions.length}
        />
      ) : (
        <div className="quizArea">
          <div className="question-section">
            <div className="question-count">
              <div>
                Question {currentQuestion + 1}/{questions.length}
              </div>
              <button className="theme" onClick={handleToggle}>
                Theme
              </button>
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          {/* map the quetion array */}
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(giveOptions)}
          </div>
          <div className="highlighters">
            <button className="btn highlight" onClick={handleFocus}>
              Add Highlight
            </button>
            <button className="btn highlight" onClick={handleNoFocus}>
              Remove Highlight
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
