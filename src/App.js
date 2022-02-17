import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [disableButtons, setDisableButtons] = useState(false);

  const outputScore = count => {
    const scoreTypes = {
      0 : 'love',
      1: 15,
      2: 30,
      3: 40,
      'default': 'Add point'
    }
    return ( scoreTypes[count] ? 'Score: ' + scoreTypes[count] : scoreTypes['default']);
  }

  const resetScore = () => {
    setDisableButtons(false);

    setCountA(0);
    setCountB(0);
  };

  const maybeDisableButtons = () => {
    if( disableButtons === false ){
      setDisableButtons(true);
    }
  }
  const compareScore = (countA, countB) => {
    const largerThenScore = ( countA > 3 || countB > 3 );
    const largerThenScoreEqual = ( countA >= 3 || countB >= 3 );

    if ( largerThenScoreEqual && countA === countB) {
      return "Deuce";
    } else if ( largerThenScore ) {
        if ( countA > countB + 1) {
          maybeDisableButtons();
          return "Game A"; 
      } else if ( countB > countA + 1) {
          maybeDisableButtons();
          return "Game B";
      } else if ( countA > countB) {
          return "Advantage A";
      } else if ( countB > countA) {
          return "Advantage B";
      }
    }
  
  };

  console.log("countA", countA, "countB", countB);
  console.log("disableButton: ", disableButtons);

  return (
    <div className="App">
      <button
        disabled={disableButtons}
        onClick={() => setCountA(countA + 1)}>
        {outputScore(countA)}
      </button>
      <button 
        disabled={disableButtons}
        onClick={() => setCountB(countB + 1)}>
        {outputScore(countB)}
      </button>
      <div>{compareScore(countA, countB)}</div>
      <button onClick={() => resetScore()}>Reset</button>
    </div>
  );
}
