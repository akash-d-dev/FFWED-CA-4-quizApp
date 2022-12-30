import React from 'react';
// import score from '../App';
// import questions from '../questions';

export default function Result({
  setScore,
  score,
  setCurrentQuestion,
  setShowScore,
  length,
}) {
  function reset() {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  }

  return (
    <div className="score-section">
      <div>
        You scored {score} out of {length} - ({(score / length) * 100}%)
      </div>
      <div>
        <button className="btn restart" onClick={reset}>
          Restart
        </button>
      </div>
    </div>
  );
}
