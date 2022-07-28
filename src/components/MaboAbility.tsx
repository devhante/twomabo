import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { maboState, update } from "../slices/maboSlice";
import "./MaboAbility.css";

interface IProps {
  number: number;
  upgrade: number;
}

export default function MaboAbility(props: IProps) {
  const maboState: maboState = useSelector((state: any) => state.mabo);
  const dispatch = useDispatch();

  console.log(maboState.maboList);
  const index1 = maboState.maboList.findIndex(
    (item) => item.name === maboState.selectedChar
  );
  const index2 = maboState.maboList[index1].abilities.findIndex(
    (item) => item.number === props.number && item.upgrade === props.upgrade
  );
  const status = maboState.maboList[index1].abilities[index2].status;

  function handleClickAbility() {
    dispatch(
      update({
        name: maboState.selectedChar,
        number: props.number,
        upgrade: props.upgrade,
        status:
          status === "unacquired"
            ? "need"
            : status === "need"
            ? "acquired"
            : "unacquired",
      })
    );
  }

  return (
    <div
      draggable={false}
      className={"noselect MaboAbility " + status}
      onClick={handleClickAbility}
    >
      {props.number}-{props.upgrade}
    </div>
  );
}
