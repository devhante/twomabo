import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { maboState, update } from "../slices/maboSlice";
import "./MaboAbilityNode.css";

interface IProps {
  number: number;
  upgrade: number;
}

export default function MaboAbilityNode(props: IProps) {
  const maboState: maboState = useSelector((state: any) => state.mabo);
  const dispatch = useDispatch();

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

  let src = "purple_gray";
  if (status === "need") {
    src = "orange";
  } else if (status === "acquired") {
    src = "blue";
  }

  return (
    <div
      draggable={false}
      className={`noselect MaboAbilityNode ${status} ${
        props.upgrade === 0 ? "first-node" : ""
      }
      `}
      onClick={handleClickAbility}
    >
      <div className="image-wrap">
        <img
          src={`${process.env.PUBLIC_URL}/others/ability_node_star_${src}.png`}
        />
      </div>
      {props.upgrade !== 5 ? <div className="line"></div> : <></>}
    </div>
  );
}
