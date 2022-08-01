import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { characters } from "../data";
import { filterState } from "../slices/filterSlice";
import { maboState } from "../slices/maboSlice";
import { character } from "../type";
import Character from "./Character";
import "./Characters.css";

export default function Characters() {
  const maboState: maboState = useSelector((state: any) => state.mabo);
  const filterState: filterState = useSelector((state: any) => state.filter);

  function filter(param: character) {
    let result =
      filterState[param.element] &&
      filterState[
        param.star === 5 ? "star5" : param.star === 4 ? "star4" : "star3"
      ];
    if (filterState.heart) {
      let count = 0;
      const index = maboState.maboList.findIndex(
        (item) => item.name === param.name_en
      );

      for (let ability of maboState.maboList[index].abilities) {
        if (ability.status !== "unacquired") {
          count++;
        }
      }
      if (count <= 0) {
        result = false;
      }
    }
    return result;
  }

  return (
    <div className="Characters">
      {characters.map((item: character) =>
        filter(item) ? <Character character={item} key={item.name_en} /> : <></>
      )}
    </div>
  );
}
