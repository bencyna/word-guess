import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from "./Utils/GlobalState";
import Play from "./Pages/Play/Play"
import Landing from "./Pages/Landing/Landing"


function App() {
  return (
    <Router>
    <div>
      <StoreProvider>
        <Switch>
          <>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/play" component={Play}/>
          </>
        </Switch>
      </StoreProvider>
    </div>
  </Router>
  );
}

export default App;
