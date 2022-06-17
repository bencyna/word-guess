import React from "react";
import Navbar from "../../Components/Navbar/Navbar.tsx";
import {Link} from "react-router-dom"

export default function Landing() {
  return (
    <div className="">
      <Navbar />
      <div className="w-1/2 m-auto">
        <div id="gameOptions" className="mt-44 w-1/2 m-auto border p-44">
          <Link to="/play" className="text-white w-full px-24 py-6 bg-blue-600 rounded-3xl relative hover:text-gray-200">
            Play Locally
          </Link>
        </div>
      </div>
    </div>
  );
}
