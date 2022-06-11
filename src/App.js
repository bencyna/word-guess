import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from "./Utils/GlobalState";
import Play from "./Pages/Play/Play"


function App() {
  return (
    <Router>
    <div>
      <StoreProvider>
        <Switch>
          <>
            <Route exact path="/pending/event/" component={Play}/>
          </>
        </Switch>
      </StoreProvider>
    </div>
  </Router>
  );
}

export default App;
