import { createSlice } from "@reduxjs/toolkit";
import { characters } from "../data";
import { abilityStatus, character, charName, mabo } from "../type";

export type maboState = {
  selectedChar: charName;
  maboList: mabo[];
};

export type maboSelectAction = {
  payload: maboSelectPayload;
  type: string;
};

export type maboSelectPayload = {
  name: charName;
};

export type maboUpdateAction = {
  payload: maboUpdatePayload;
  type: string;
};

export type maboUpdatePayload = {
  name: charName;
  number: number;
  upgrade: number;
  status: abilityStatus;
};

const getMaboList = (): mabo[] => {
  let result: mabo[] = [];
  const data = localStorage.getItem("maboList");
  if (data) {
    result = JSON.parse(data);
  }
  for (const char of characters) {
    result.push({
      name: char.name_en,
      element: char.element,
      abilities: [
        { number: 4, upgrade: 0, status: "unacquired" },
        { number: 4, upgrade: 1, status: "unacquired" },
        { number: 4, upgrade: 2, status: "unacquired" },
        { number: 4, upgrade: 3, status: "unacquired" },
        { number: 4, upgrade: 4, status: "unacquired" },
        { number: 4, upgrade: 5, status: "unacquired" },
        { number: 5, upgrade: 0, status: "unacquired" },
        { number: 5, upgrade: 1, status: "unacquired" },
        { number: 5, upgrade: 2, status: "unacquired" },
        { number: 5, upgrade: 3, status: "unacquired" },
        { number: 5, upgrade: 4, status: "unacquired" },
        { number: 5, upgrade: 5, status: "unacquired" },
        { number: 6, upgrade: 0, status: "unacquired" },
        { number: 6, upgrade: 1, status: "unacquired" },
        { number: 6, upgrade: 2, status: "unacquired" },
        { number: 6, upgrade: 3, status: "unacquired" },
        { number: 6, upgrade: 4, status: "unacquired" },
        { number: 6, upgrade: 5, status: "unacquired" },
      ],
    });
  }

  return result;
};

const initialState: maboState = {
  selectedChar: "Vagner",
  maboList: getMaboList(),
};

export const maboSlice = createSlice({
  name: "mabo",
  initialState: initialState,
  reducers: {
    select: (state: maboState, action: maboSelectAction) => {
      state.selectedChar = action.payload.name;
    },
    update: (state: maboState, action: maboUpdateAction) => {
      const index1 = state.maboList.findIndex(
        (item) => item.name === action.payload.name
      );
      const index2 = state.maboList[index1].abilities.findIndex(
        (item) =>
          item.number === action.payload.number &&
          item.upgrade === action.payload.upgrade
      );
      state.maboList[index1].abilities[index2].status = action.payload.status;
      localStorage.setItem("maboList", JSON.stringify(state.maboList));
    },
  },
});

export const { select, update } = maboSlice.actions;
export default maboSlice.reducer;
