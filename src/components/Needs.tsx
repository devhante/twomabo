import React from "react";
import { useSelector } from "react-redux";
import { maboState } from "../slices/maboSlice";
import { element, itemName } from "../type";
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
    element_water_3: 0,
    element_water_4: 0,
    ether_water_1: 0,
    ether_water_2: 0,
    ether_water_3: 0,
    element_thunder_3: 0,
    element_thunder_4: 0,
    ether_thunder_1: 0,
    ether_thunder_2: 0,
    ether_thunder_3: 0,
    element_wind_3: 0,
    element_wind_4: 0,
    ether_wind_1: 0,
    ether_wind_2: 0,
    ether_wind_3: 0,
    element_light_3: 0,
    element_light_4: 0,
    ether_light_1: 0,
    ether_light_2: 0,
    ether_light_3: 0,
    element_dark_3: 0,
    element_dark_4: 0,
    ether_dark_1: 0,
    ether_dark_2: 0,
    ether_dark_3: 0,
  };

  function addCount(
    element: element,
    mana: number,
    dreamCoatOfArms: number,
    element3: number,
    element4: number,
    ether1: number,
    ether2: number,
    ether3: number
  ): void {
    itemCount.mana += mana;
    itemCount.dream_coat_of_arms += dreamCoatOfArms;
    switch (element) {
      case "fire":
        itemCount.element_fire_3 += element3;
        itemCount.element_fire_4 += element4;
        itemCount.ether_fire_1 += ether1;
        itemCount.ether_fire_2 += ether2;
        itemCount.ether_fire_3 += ether3;
        break;
      case "water":
        itemCount.element_water_3 += element3;
        itemCount.element_water_4 += element4;
        itemCount.ether_water_1 += ether1;
        itemCount.ether_water_2 += ether2;
        itemCount.ether_water_3 += ether3;
        break;
      case "thunder":
        itemCount.element_thunder_3 += element3;
        itemCount.element_thunder_4 += element4;
        itemCount.ether_thunder_1 += ether1;
        itemCount.ether_thunder_2 += ether2;
        itemCount.ether_thunder_3 += ether3;
        break;
      case "wind":
        itemCount.element_wind_3 += element3;
        itemCount.element_wind_4 += element4;
        itemCount.ether_wind_1 += ether1;
        itemCount.ether_wind_2 += ether2;
        itemCount.ether_wind_3 += ether3;
        break;
      case "light":
        itemCount.element_light_3 += element3;
        itemCount.element_light_4 += element4;
        itemCount.ether_light_1 += ether1;
        itemCount.ether_light_2 += ether2;
        itemCount.ether_light_3 += ether3;
        break;
      case "dark":
        itemCount.element_dark_3 += element3;
        itemCount.element_dark_4 += element4;
        itemCount.ether_dark_1 += ether1;
        itemCount.ether_dark_2 += ether2;
        itemCount.ether_dark_3 += ether3;
        break;
    }
  }

  for (const mabo of maboState.maboList) {
    for (const ability of mabo.abilities) {
      if (ability.status === "need") {
        if (ability.number === 4 && ability.upgrade === 0) {
          addCount(mabo.element, 4500, 3, 10, 8, 10, 0, 0);
        } else if (ability.number === 4 && ability.upgrade === 1) {
          addCount(mabo.element, 5050, 3, 12, 10, 12, 0, 0);
        } else if (ability.number === 4 && ability.upgrade === 2) {
          addCount(mabo.element, 5600, 5, 18, 12, 12, 2, 0);
        } else if (ability.number === 4 && ability.upgrade === 3) {
          addCount(mabo.element, 6240, 5, 0, 14, 14, 4, 1);
        } else if (ability.number === 4 && ability.upgrade === 4) {
          addCount(mabo.element, 8360, 8, 0, 16, 16, 6, 2);
        } else if (ability.number === 4 && ability.upgrade === 5) {
          addCount(mabo.element, 10200, 8, 0, 20, 20, 10, 4);
        } else if (ability.number === 5 && ability.upgrade === 0) {
          addCount(mabo.element, 5100, 3, 16, 8, 12, 4, 0);
        } else if (ability.number === 5 && ability.upgrade === 1) {
          addCount(mabo.element, 5900, 5, 20, 10, 12, 5, 0);
        } else if (ability.number === 5 && ability.upgrade === 2) {
          addCount(mabo.element, 7420, 5, 0, 12, 14, 6, 2);
        } else if (ability.number === 5 && ability.upgrade === 3) {
          addCount(mabo.element, 10000, 8, 0, 14, 16, 8, 4);
        } else if (ability.number === 5 && ability.upgrade === 4) {
          addCount(mabo.element, 12700, 8, 0, 16, 20, 10, 6);
        } else if (ability.number === 5 && ability.upgrade === 5) {
          addCount(mabo.element, 14100, 10, 0, 18, 24, 15, 10);
        } else if (ability.number === 6 && ability.upgrade === 0) {
          addCount(mabo.element, 7300, 5, 0, 10, 14, 6, 2);
        } else if (ability.number === 6 && ability.upgrade === 1) {
          addCount(mabo.element, 9980, 5, 0, 12, 18, 8, 4);
        } else if (ability.number === 6 && ability.upgrade === 2) {
          addCount(mabo.element, 12250, 8, 0, 14, 18, 10, 6);
        } else if (ability.number === 6 && ability.upgrade === 3) {
          addCount(mabo.element, 14600, 8, 0, 16, 20, 12, 8);
        } else if (ability.number === 6 && ability.upgrade === 4) {
          addCount(mabo.element, 18300, 10, 0, 18, 24, 16, 10);
        } else if (ability.number === 6 && ability.upgrade === 5) {
          addCount(mabo.element, 22400, 10, 0, 22, 28, 20, 15);
        }
      }
    }
  }

  const itemNames: itemName[] = Object.keys(itemCount) as itemName[];

  const needs = (
    <>
      {itemNames.map((item) =>
        itemCount[item] > 0 ? (
          <Need item={item} count={itemCount[item]} key={item} />
        ) : (
          <></>
        )
      )}
    </>
  );

  return (
    <div className="Needs">
      <div className="needs-title">Needs:</div>
      {needs}
    </div>
  );
}
