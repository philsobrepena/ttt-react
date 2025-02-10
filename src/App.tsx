import { useState } from 'react'
import './App.css'

function Square({value, clickAction}){
  return <button className="square" onClick={clickAction}>{value}</button>;
}

function App() {
  const [xIsNext, setXIsNext] = useState(true)
  const [spaces, setSpaces] = useState(Array(9).fill(null))

  function handleClick(i: number){

    if (calculateWinner(spaces) || spaces[i]){
      return;
    }

    const nextSpaces = spaces.slice()
    if (xIsNext){
    nextSpaces[i] = "X";
    } else {
      nextSpaces[i] = "O";
    }
    setSpaces(nextSpaces)
    setXIsNext(!xIsNext)

  }

  const winner = calculateWinner(spaces);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={spaces[0]} clickAction={() => handleClick(0)}/>
        <Square value={spaces[1]} clickAction={() => handleClick(1)}/>
        <Square value={spaces[2]} clickAction={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={spaces[3]} clickAction={() => handleClick(3)} />
        <Square value={spaces[4]} clickAction={() => handleClick(4)}/>
        <Square value={spaces[5]} clickAction={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={spaces[6]} clickAction={() => handleClick(6)}/>
        <Square value={spaces[7]} clickAction={() => handleClick(7)}/>
        <Square value={spaces[8]} clickAction={() => handleClick(8)}/>
      </div>
      {/* <div className="scoreboard">
        <ScoreBoard />
      </div> */}
    </>
  );
}

function calculateWinner(spaces){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  for (let i = 0; i< lines.length; i++){
    const [a, b, c] = lines[i];
    if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]){
      return spaces[a]
    }
  }
}


export default App
