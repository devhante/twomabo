import React from "react";
import "./Need.css";

interface IProps {
  src: string;
  count: number;
}

export default function Need(props: IProps) {
  return (
    <div className="Need">
      <img className="need-image" src={props.src} />
      <div className="need-count">{props.count}</div>
    </div>
  );
}
