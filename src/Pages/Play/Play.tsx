import React, {useState} from 'react'
import Navbar from "../../Components/Navbar/Navbar.tsx";


export default function Play() {
  const [playersNumber, setPlayerNumbers] = useState(0);

  return (
    <div>
      <Navbar />
      <div className="playersChice">
        {playersNumber <= 1 ? (<div>
          choose how many players
        </div>) : (<div>
          player
        </div>)}
      </div>
    </div>
  )
}
