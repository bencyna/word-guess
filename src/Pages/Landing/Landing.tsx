import React from 'react'
import Navbar from "../../Components/Navbar/Navbar.tsx"


export default function Landing() {
  return (
    <div>
        <Navbar/>
        <div id="gameOptions w-full align-center justify-content flex">
            <button className="flex justify-center px-24 py-12 bg-blue-400">Play now</button>
        </div>
    </div>
  )
}
