import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import image from './img/tennis.jpg';


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
    <div className="App container col-lg-3 col-md-6 col-sm-6 col-10"> 
      <div className="Players row"> 
      <h1 className="mt-5 ">Tennis Score Tracker</h1>
      <img 
      className="mb-4 mt-3"
      src={image} width="150px" 
      alt="tennis balls" /> 
        <div className="player-A col">
          <div>Player A</div>
          <button
            className="btn btn-primary  m-1"
            disabled={disableButtons}
            onClick={() => setCountA(countA + 1)}>
            {outputScore(countA)}
          </button>
        </div>

        <div className="player-B col">
          <div>Player B</div>
        
          <button 
            className="btn btn-primary m-1"
            disabled={disableButtons}
            onClick={() => setCountB(countB + 1)}>
            {outputScore(countB)}
          </button>
        </div>
      </div>

      <div className="row">
        <div
            className="mb-2 mt-2">
              {compareScore(countA, countB)}
        </div>
        <div className="Reset">
          <button 
            className="btn btn-secondary"
            onClick={() => resetScore()}>
            Reset
          </button>
        </div>
      </div>

    </div>
  );
}
