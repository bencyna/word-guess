import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StoreProvider } from "./Utils/GlobalState.tsx";
import Play from "./Pages/Play/Play.tsx"
import Landing from "./Pages/Landing/Landing.tsx"


function App() {
  return (
    <Router>
    <div>
      <StoreProvider>
        <Routes>
          <>
            <Route exact path="/" element={<Landing/>}/>
            <Route exact path="/play" element={<Play/>}/>
          </>
        </Routes>
      </StoreProvider>
    </div>
  </Router>
  );
}

export default App;
