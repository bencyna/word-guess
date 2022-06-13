import React from 'react'
import Navbar from "../../Components/Navbar/Navbar.tsx"


export default function Landing() {
  return (
    <div>
        <Navbar/>
        <div id="gameOptions w-full m-auto">
            <button className="flex justify-center px-24 py-12 bg-blue-400 border-r-3xl">Play now h</button>
        </div>
    </div>
  )
}
