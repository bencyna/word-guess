import React from "react";
import Navbar from "../../Components/Navbar/Navbar.tsx";

export default function Landing() {
  return (
    <div className="">
      <Navbar />
      <div className="w-1/2 m-auto">
        <div id="gameOptions" className="mt-44 w-1/2 m-auto border p-44">
          <button className="text-white px-24 py-6 bg-blue-600 rounded-3xl relative right-24 hover:text-gray-200">
            Play Locally
          </button>
        </div>
      </div>
    </div>
  );
}
