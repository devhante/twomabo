import React from "react";
import Character from "./Character";
import "./Characters.css";

export default function Characters() {
  return (
    <div className="Characters">
      <Character element="fire" star={5} name_en="Rolf" name_ko="롤프" />
      <Character element="fire" star={5} name_en="Marina" name_ko="마리나" />
      <Character
        element="fire"
        star={5}
        name_en="Clarisse"
        name_ko="클라리스"
      />
      <Character element="fire" star={4} name_en="Bianca" name_ko="비앙카" />
    </div>
  );
}
