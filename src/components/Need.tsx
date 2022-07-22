import React from "react";
import "./Need.css";

interface IProps {
  item: string;
  count: number;
}

export default function Need(props: IProps) {
  return (
    <div className="Need">
      <img
        className="need-image"
        src={`items/${props.item}.png`}
        alt={props.item}
      />
      <div className="need-count">{props.count}</div>
    </div>
  );
}
