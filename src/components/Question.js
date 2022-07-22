import React, { useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code

  useEffect(() =>{
    if (timeRemaining === 0) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
    return;
  }

  const idTime = setTimeout(() => {
    setTimeRemaining((timeRemaining)=>timeRemaining -1);
  }, 1000);
  return function(){
    clearTimeout(idTime);
  };
}, [timeRemaining, onAnswered]
  
  
  )
  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
