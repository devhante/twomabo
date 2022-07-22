import React from "react";
import "./App.css";
import Characters from "./components/Characters";
import Mabo from "./components/Mabo";
import Needs from "./components/Needs";

function App() {
  return (
    <div className="App">
      <Needs />
      <div className="content">
        <Characters />
        <Mabo name="Bianca" />
      </div>
    </div>
  );
}

export default App;
