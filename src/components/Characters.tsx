import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { characters } from "../data";
import { filterState } from "../slices/filterSlice";
import { character } from "../type";
import Character from "./Character";
import "./Characters.css";

export default function Characters() {
  const filterState: filterState = useSelector((state: any) => state.filter);

  return (
    <div className="Characters">
      {characters.map((item: character) =>
        filterState[item.element] &&
        filterState[
          item.star === 5 ? "star5" : item.star === 4 ? "star4" : "star3"
        ] ? (
          <Character character={item} key={item.name_en} />
        ) : (
          <></>
        )
      )}
    </div>
  );
}
