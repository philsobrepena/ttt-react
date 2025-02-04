import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let [player, setPlayer] = useState("0");

  const calcPlayer = () => {
    if (count % 2 == 0){
      player = "X"
    } else {
      player = "0"
    }
    return player
  }


  var clickAction = () => {
    setCount(count + 1)
    calcPlayer()
    setPlayer(player)

  }

  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div id="row1">
          <button onClick={() => clickAction()}>{player}</button>
          <button onClick={() => clickAction()}>{player}</button>
          <button onClick={() => clickAction()}>{player}</button>
        </div>
        <div id="row2">
        <button onClick={() => clickAction()}>{player}</button>
        <button onClick={() => clickAction()}>{player}</button>
        <button onClick={() => clickAction()}>{player}</button>
        </div>
        <div id="row3">
        <button onClick={() => clickAction()}>{player}</button>
        <button onClick={() => clickAction()}>{player}</button>
        <button onClick={() => clickAction()}>{player}</button>
        </div>
        <div>
          <p>
            count is {count}, player is {player}
          </p>
        </div>
      </div>

    </>
  )
}

export default App
