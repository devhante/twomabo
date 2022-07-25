import React from "react";
import { characters } from "../data";
import Character from "./Character";
import "./Characters.css";

export default function Characters() {
  return (
    <div className="Characters">
      {characters.map((item) => (
        <Character character={item} key={item.name_en} />
      ))}
    </div>
  );
}
