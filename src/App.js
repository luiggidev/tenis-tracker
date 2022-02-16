import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const outputScore = (count) => {
    if (count === 0) {
      return "love";
    } else if (count === 1) {
      return 15;
    } else if (count === 2) {
      return 30;
    } else if (count === 3) {
      return 40;
    }
  };

  const resetScore = () => {
    setCountA(0);
    setCountB(0);
  };

  console.log("countA", countA, "countB", countB);

  const compareScore = (countA, countB) => {
    if ((countA >= 3 || countB >= 3) && countA === countB) {
      return "Deuce";
    } else if ((countA > 3 || countB > 3) && countA > countB + 1) {
      return "Game A";
    } else if ((countA > 3 || countB > 3) && countB > countA + 1) {
      return "Game B";
    } else if ((countA > 3 || countB > 3) && countA > countB) {
      return "Advantage A";
    } else if ((countA > 3 || countB > 3) && countB > countA) {
      return "Advantage B";
    }
  };

  return (
    <div className="App">
      <button onClick={() => setCountA(countA + 1)}>
        Score: {outputScore(countA)}
      </button>
      <button onClick={() => setCountB(countB + 1)}>
        Score: {outputScore(countB)}
      </button>
      <div>{compareScore(countA, countB)}</div>
      <button onClick={() => resetScore()}>Reset</button>
    </div>
  );
}
