import { useState } from 'react'
import './App.css'



function Square({value, clickAction}) {

  return <button className="square" onClick={clickAction}>{value}</button>;
}

function App() {
  const [spaces, setSpaces] = useState(Array(9).fill("-"))

  function handleClick(i: number){
    const nextSpaces = spaces.slice();
    nextSpaces[i] = "X"
    setSpaces(nextSpaces)
  }

  return (
    <>
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


export default App
