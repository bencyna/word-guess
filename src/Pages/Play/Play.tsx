import React, {useState} from 'react'

export default function Play() {
  const [playersNumber, setPlayerNumbers] = useState(0);

  return (
    <div>
      {/* How many players? */}
      <div className="playersChice">
        {playersNumber < 0 ? (<div>
          choose how many players
        </div>) : (<div>
          player
        </div>)}
      </div>
    </div>
  )
}
