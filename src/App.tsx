import React from "react";
import "./App.css";
import Characters from "./components/Characters";
import Filter from "./components/Filter";
import Mabo from "./components/Mabo";
import Navbar from "./components/Navbar";
import Needs from "./components/Needs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Filter />
      <div className="content">
        <div className="wrap">
          <Characters />
          <Mabo name="Bianca" />
        </div>
      </div>
      <Needs />
    </div>
  );
}

export default App;
