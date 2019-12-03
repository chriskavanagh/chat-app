import React from "react";
import "./App.css";
import Chat from "./components/Chat";
import Join from "./components/Join";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/chat" component={Chat} />
        <Route path="/" component={Join} />
      </Switch>
    </div>
  );
}

export default App;
