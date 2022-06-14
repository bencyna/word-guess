import React from "react";
import Navbar from "../../Components/Navbar/Navbar.tsx";

export default function Landing() {
  return (
    <div className="">
      <Navbar />
      <div className="w-1/2 m-auto">
        <div id="gameOptions" className=" w-1/2 align-center justify-content m-auto">
          <button className="px-24 py-12 bg-blue-600 border-r-3xl">
            Play now h
          </button>
        </div>
      </div>
    </div>
  );
}
