import React, {useState} from 'react'
import Navbar from "../../Components/Navbar/Navbar.tsx";
import Input from "../../Components/Input/Input.tsx"

export default function Play() {
  const [playersNumber, setPlayerNumbers] = useState(0);

  return (
    <div>
      <Navbar />
      <div className="playersChice">
        {playersNumber <= 1 ? (
        <div className="w-1/2 m-auto mt-24 w-1/2 m-auto border p-24">
          <h3 className="text-2xl">
          choose how many players
          </h3>
          <Input type="number" class = {{}} value={playersNumber} text="Number of players" name="playersNumber" id="playersNumber" placeholder="0"/>
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
