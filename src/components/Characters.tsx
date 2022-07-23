import React from "react";
import { character } from "../type";
import Character from "./Character";
import "./Characters.css";

export default function Characters() {
  const characters: character[] = [
    { element: "fire", star: 5, name_en: "Rolf", name_ko: "롤프" },
    { element: "fire", star: 5, name_en: "Marina", name_ko: "마리나" },
    { element: "fire", star: 5, name_en: "Clarisse", name_ko: "클라리스" },
    { element: "fire", star: 4, name_en: "Bianca", name_ko: "비앙카" },
    { element: "dark", star: 5, name_en: "Vyron", name_ko: "베론" },
  ];
  return (
    <div className="Characters">
      {characters.map((item) => (
        <Character character={item} key={item.name_en} />
      ))}
    </div>
  );
}
