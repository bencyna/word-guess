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
        <div className="md:w-1/2 m-auto md:mt-24 border p-24">
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
