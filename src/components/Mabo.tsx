import React from "react";
import { charName } from "../type";
import "./Mabo.css";
import MaboAbilityNode from "./MaboAbilityNode";

interface IProps {
  name: charName;
}

export default function Mabo(props: IProps) {
  return (
    <div className="Mabo">
      <div className="mabo-ability">
        <div className="mabo-ability-title">어빌리티4</div>
        <MaboAbilityNode number={4} upgrade={0} />
        <MaboAbilityNode number={4} upgrade={1} />
        <MaboAbilityNode number={4} upgrade={2} />
        <MaboAbilityNode number={4} upgrade={3} />
        <MaboAbilityNode number={4} upgrade={4} />
        <MaboAbilityNode number={4} upgrade={5} />
      </div>
      <div className="mabo-ability">
        <div className="mabo-ability-title">어빌리티5</div>
        <MaboAbilityNode number={5} upgrade={0} />
        <MaboAbilityNode number={5} upgrade={1} />
        <MaboAbilityNode number={5} upgrade={2} />
        <MaboAbilityNode number={5} upgrade={3} />
        <MaboAbilityNode number={5} upgrade={4} />
        <MaboAbilityNode number={5} upgrade={5} />
      </div>
      <div className="mabo-ability">
        <div className="mabo-ability-title">어빌리티6</div>
        <MaboAbilityNode number={6} upgrade={0} />
        <MaboAbilityNode number={6} upgrade={1} />
        <MaboAbilityNode number={6} upgrade={2} />
        <MaboAbilityNode number={6} upgrade={3} />
        <MaboAbilityNode number={6} upgrade={4} />
        <MaboAbilityNode number={6} upgrade={5} />
      </div>
    </div>
  );
}
