import React from "react";
import { charName } from "../type";
import "./Mabo.css";
import MaboAbility from "./MaboAbility";

interface IProps {
  name: charName;
}

export default function Mabo(props: IProps) {
  return (
    <div className="Mabo">
      <div className="Mabo-abilities">
        <MaboAbility number={4} upgrade={0} />
        <MaboAbility number={4} upgrade={1} />
        <MaboAbility number={4} upgrade={2} />
        <MaboAbility number={4} upgrade={3} />
        <MaboAbility number={4} upgrade={4} />
        <MaboAbility number={4} upgrade={5} />
      </div>
      <div className="Mabo-abilities">
        <MaboAbility number={5} upgrade={0} />
        <MaboAbility number={5} upgrade={1} />
        <MaboAbility number={5} upgrade={2} />
        <MaboAbility number={5} upgrade={3} />
        <MaboAbility number={5} upgrade={4} />
        <MaboAbility number={5} upgrade={5} />
      </div>
      <div className="Mabo-abilities">
        <MaboAbility number={6} upgrade={0} />
        <MaboAbility number={6} upgrade={1} />
        <MaboAbility number={6} upgrade={2} />
        <MaboAbility number={6} upgrade={3} />
        <MaboAbility number={6} upgrade={4} />
        <MaboAbility number={6} upgrade={5} />
      </div>
    </div>
  );
}
