import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { maboState, select } from "../slices/maboSlice";
import { character } from "../type";
import "./Character.css";

interface IProps {
  character: character;
}

export default function Character(props: IProps) {
  const maboState: maboState = useSelector((state: any) => state.mabo);
  const dispatch = useDispatch();
  const selected = props.character.name_en === maboState.selectedChar;

  function handleClickCharacter() {
    dispatch(
      select({
        name: props.character.name_en,
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
        src={`${process.env.PUBLIC_URL}/characters/${props.character.name_en}.png`}
        alt={props.character.name_ko}
      />
      <div className="character-info">
        <img
          className="character-element"
          src={`${process.env.PUBLIC_URL}/others/element_${props.character.element}.png`}
          alt={props.character.element}
        />
        <img
          className="character-star"
          src={`${process.env.PUBLIC_URL}/others/star_${props.character.star}.png`}
          alt={`star ${props.character.star}`}
        />
        <div className="character-name">{props.character.name_ko}</div>
      </div>
    </div>
  );
}
