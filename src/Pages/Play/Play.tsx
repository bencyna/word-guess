import React, {useState} from 'react'
import Navbar from "../../Components/Navbar/Navbar.tsx";
import Input from "../../Components/HTML/Input.tsx"
import Button from "../../Components/HTML/Button.tsx"
import Players from "../../Classes/player_class.tsx"

export default function Play() {
  const [playersNumber, setPlayerNumbers] = useState(0);
  const [play, setPlay] = useState(false);

  const playersOnChange = (e) => {
    if (e.target.value > 6) {
      e.target.value = 6
    }
    setPlayerNumbers(e.target.value);
  }

  const playerNameChange = (e) => {
    // add to list of players
  }

  return (
    <div>
      <Navbar />
      <div className="playersChice">
        {!play ? (
        <div className="md:w-1/2 m-auto md:mt-24 border p-24">
          <Input type="number" class = {{}} onChange={playersOnChange} value={playersNumber} text="Number of players" name="playersNumber" id="playersNumber" placeholder="0"/>
          <div className="players">
          {Array.apply(null, {length: playersNumber}).map((i) => (
          <Input id={`players${i}`} type="number" class = {{}} onChange={playerNameChange} text="Player name" name={`playerName${i}`} placeholder="Player Name"/>
          ))}
          </div>
          <Button text="Play"/>
        </div>
        ) : (
        <div>
          player
        </div>
        )}
      </div>
    </div>
  )
}
