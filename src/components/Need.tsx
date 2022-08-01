import React from "react";
import { itemName } from "../type";
import "./Need.css";

interface IProps {
  item: itemName;
  count: number;
}

export default function Need(props: IProps) {
  return (
    <div className="Need" key={props.item}>
      <img
        className="need-image"
        src={`${process.env.PUBLIC_URL}/items/${props.item}.png`}
        alt={props.item}
      />
      <div className="need-count">x{props.count}</div>
    </div>
  );
}
