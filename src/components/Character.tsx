import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { maboState, select } from "../slices/maboSlice";
import { charName } from "../type";
import "./Character.css";

interface IProps {
  element: string;
  star: number;
  name_en: charName;
  name_ko: string;
}

export default function Character(props: IProps) {
  const maboState: maboState = useSelector((state: any) => state.mabo);
  const dispatch = useDispatch();
  const selected = props.name_en === maboState.selectedChar;

  function handleClickCharacter() {
    dispatch(
      select({
        name: props.name_en,
      })
    );
  }

  return (
    <div
      className={"Character" + (selected ? " selected" : "")}
      onClick={handleClickCharacter}
    >
      <img
        className="character-image"
        src={`${process.env.PUBLIC_URL}/characters/${props.name_en}.png`}
      />
      <div className="character-info">
        <img
          className="character-element"
          src={`${process.env.PUBLIC_URL}/others/elemental-${props.element}.png`}
        />
        <img
          className="character-star"
          src={`${process.env.PUBLIC_URL}/others/star${props.star}.png`}
        />
        <div className="character-name">{props.name_ko}</div>
      </div>
    </div>
  );
}
