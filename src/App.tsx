import React from "react";
import "./App.css";
import Characters from "./components/Characters";
import Needs from "./components/Needs";

function App() {
  return (
    <div className="App">
      <Needs />
      <Characters />
    </div>
  );
}

export default App;
