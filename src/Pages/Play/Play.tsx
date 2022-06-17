import React, {useState} from 'react'
import Navbar from "../../Components/Navbar/Navbar.tsx";
import Input from "../../Components/Input/Input.tsx"

export default function Play() {
  const [playersNumber, setPlayerNumbers] = useState(0);
  const [play, setPlay] = useState(false);

  const onChange = (e) => {
    if (e.target.value > 6) {
      e.target.value = 6
    }
    setPlayerNumbers(e.target.value);
  }

  return (
    <div>
      <Navbar />
      <div className="playersChice">
        {!play ? (
        <div className="md:w-1/2 m-auto md:mt-24 border p-24">
          <Input type="number" class = {{}} onChange={onChange} value={playersNumber} text="Number of players" name="playersNumber" id="playersNumber" placeholder="0"/>
        {playersNumber}

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
