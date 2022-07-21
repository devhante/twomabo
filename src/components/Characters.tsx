import React from "react";
import Character from "./Character";
import "./Characters.css";

export default function Characters() {
  return (
    <div className="Characters">
      <Character
        src="/characters/Bianca.png"
        element="fire"
        star={4}
        name="비앙카"
      />
      <Character
        src="/characters/Bianca.png"
        element="fire"
        star={4}
        name="비앙카"
      />
      <Character
        src="/characters/Bianca.png"
        element="fire"
        star={4}
        name="비앙카"
      />
    </div>
  );
}
