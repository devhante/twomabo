import React from "react";
import { useSelector } from "react-redux";
import { maboState } from "../slices/maboSlice";
import { itemName } from "../type";
import Need from "./Need";
import "./Needs.css";

export default function Needs() {
  const maboState: maboState = useSelector((state: any) => state.mabo);

  const itemCount = {
    mana: 0,
    dream_coat_of_arms: 0,
    element_fire_3: 0,
    element_fire_4: 0,
    ether_fire_1: 0,
    ether_fire_2: 0,
    ether_fire_3: 0,
  };

  for (const mabo of maboState.maboList) {
    for (const ability of mabo.abilities) {
      if (ability.status === "need") {
        if (ability.number === 4 && ability.upgrade === 0) {
          itemCount.mana += 4500;
          itemCount.dream_coat_of_arms += 3;
          itemCount.element_fire_3 += 10;
          itemCount.element_fire_4 += 8;
          itemCount.ether_fire_1 += 10;
        } else if (ability.number === 4 && ability.upgrade === 1) {
          itemCount.mana += 5050;
          itemCount.dream_coat_of_arms += 3;
          itemCount.element_fire_3 += 12;
          itemCount.element_fire_4 += 10;
          itemCount.ether_fire_1 += 12;
        } else if (ability.number === 4 && ability.upgrade === 2) {
          itemCount.mana += 5600;
          itemCount.dream_coat_of_arms += 5;
          itemCount.element_fire_3 += 18;
          itemCount.element_fire_4 += 12;
          itemCount.ether_fire_1 += 12;
          itemCount.ether_fire_2 += 2;
        } else if (ability.number === 4 && ability.upgrade === 3) {
          itemCount.mana += 6240;
          itemCount.dream_coat_of_arms += 5;
          itemCount.element_fire_4 += 14;
          itemCount.ether_fire_1 += 14;
          itemCount.ether_fire_2 += 4;
          itemCount.ether_fire_3 += 1;
        } else if (ability.number === 4 && ability.upgrade === 4) {
          itemCount.mana += 8360;
          itemCount.dream_coat_of_arms += 8;
          itemCount.element_fire_4 += 16;
          itemCount.ether_fire_1 += 16;
          itemCount.ether_fire_2 += 6;
          itemCount.ether_fire_3 += 2;
        } else if (ability.number === 4 && ability.upgrade === 5) {
          itemCount.mana += 10200;
          itemCount.dream_coat_of_arms += 8;
          itemCount.element_fire_4 += 20;
          itemCount.ether_fire_1 += 20;
          itemCount.ether_fire_2 += 10;
          itemCount.ether_fire_3 += 4;
        } else if (ability.number === 5 && ability.upgrade === 0) {
          itemCount.mana += 5100;
          itemCount.dream_coat_of_arms += 3;
          itemCount.element_fire_3 += 16;
          itemCount.element_fire_4 += 8;
          itemCount.ether_fire_1 += 12;
          itemCount.ether_fire_2 += 4;
        } else if (ability.number === 5 && ability.upgrade === 1) {
          itemCount.mana += 5900;
          itemCount.dream_coat_of_arms += 5;
          itemCount.element_fire_3 += 20;
          itemCount.element_fire_4 += 10;
          itemCount.ether_fire_1 += 12;
          itemCount.ether_fire_2 += 5;
        } else if (ability.number === 5 && ability.upgrade === 2) {
          itemCount.mana += 7420;
          itemCount.dream_coat_of_arms += 5;
          itemCount.element_fire_4 += 12;
          itemCount.ether_fire_1 += 14;
          itemCount.ether_fire_2 += 6;
          itemCount.ether_fire_3 += 2;
        } else if (ability.number === 5 && ability.upgrade === 3) {
          itemCount.mana += 10000;
          itemCount.dream_coat_of_arms += 8;
          itemCount.element_fire_4 += 14;
          itemCount.ether_fire_1 += 16;
          itemCount.ether_fire_2 += 8;
          itemCount.ether_fire_3 += 4;
        } else if (ability.number === 5 && ability.upgrade === 4) {
          itemCount.mana += 12700;
          itemCount.dream_coat_of_arms += 8;
          itemCount.element_fire_4 += 16;
          itemCount.ether_fire_1 += 20;
          itemCount.ether_fire_2 += 10;
          itemCount.ether_fire_3 += 6;
        } else if (ability.number === 5 && ability.upgrade === 5) {
          itemCount.mana += 14100;
          itemCount.dream_coat_of_arms += 10;
          itemCount.element_fire_4 += 18;
          itemCount.ether_fire_1 += 24;
          itemCount.ether_fire_2 += 15;
          itemCount.ether_fire_3 += 10;
        } else if (ability.number === 6 && ability.upgrade === 0) {
          itemCount.mana += 7300;
          itemCount.dream_coat_of_arms += 5;
          itemCount.element_fire_4 += 10;
          itemCount.ether_fire_1 += 14;
          itemCount.ether_fire_2 += 6;
          itemCount.ether_fire_3 += 2;
        } else if (ability.number === 6 && ability.upgrade === 1) {
          itemCount.mana += 9980;
          itemCount.dream_coat_of_arms += 5;
          itemCount.element_fire_4 += 12;
          itemCount.ether_fire_1 += 18;
          itemCount.ether_fire_2 += 8;
          itemCount.ether_fire_3 += 4;
        } else if (ability.number === 6 && ability.upgrade === 2) {
          itemCount.mana += 12250;
          itemCount.dream_coat_of_arms += 8;
          itemCount.element_fire_4 += 14;
          itemCount.ether_fire_1 += 18;
          itemCount.ether_fire_2 += 10;
          itemCount.ether_fire_3 += 6;
        } else if (ability.number === 6 && ability.upgrade === 3) {
          itemCount.mana += 14600;
          itemCount.dream_coat_of_arms += 8;
          itemCount.element_fire_4 += 16;
          itemCount.ether_fire_1 += 20;
          itemCount.ether_fire_2 += 12;
          itemCount.ether_fire_3 += 8;
        } else if (ability.number === 6 && ability.upgrade === 4) {
          itemCount.mana += 18300;
          itemCount.dream_coat_of_arms += 10;
          itemCount.element_fire_4 += 18;
          itemCount.ether_fire_1 += 24;
          itemCount.ether_fire_2 += 16;
          itemCount.ether_fire_3 += 10;
        } else if (ability.number === 6 && ability.upgrade === 5) {
          itemCount.mana += 22400;
          itemCount.dream_coat_of_arms += 10;
          itemCount.element_fire_4 += 22;
          itemCount.ether_fire_1 += 28;
          itemCount.ether_fire_2 += 20;
          itemCount.ether_fire_3 += 15;
        }
      }
    }
  }

  const itemNames: itemName[] = Object.keys(itemCount) as itemName[];

  const needs = (
    <>
      {itemNames.map((item) => (
        <Need item={item} count={itemCount[item]} key={item} />
      ))}
    </>
  );

  return (
    <div className="Needs">
      <div className="needs-title">Needs:</div>
      {needs}
    </div>
  );
}
