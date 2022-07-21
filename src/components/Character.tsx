import React from "react";
import "./Character.css";

interface IProps {
  src: string;
  element: string;
  star: number;
  name: string;
}

export default function Character(props: IProps) {
  return (
    <div className="Character">
      <img className="character-image" src={props.src} />
      <div className="character-info">
        <img
          className="character-element"
          src={`/others/elemental-${props.element}.png`}
        />
        <img className="character-star" src={`/others/star${props.star}.png`} />
        <div className="character-name">{props.name}</div>
      </div>
    </div>
  );
}
