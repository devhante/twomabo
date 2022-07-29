import { createSlice } from "@reduxjs/toolkit";
import { filterName } from "../type";

export type filterState = {
  heart: boolean;
  fire: boolean;
  water: boolean;
  thunder: boolean;
  wind: boolean;
  light: boolean;
  dark: boolean;
  star5: boolean;
  star4: boolean;
  star3: boolean;
};

export type filterToggleAction = {
  payload: filterTogglePayload;
  type: string;
};

export type filterTogglePayload = {
  name: filterName;
};

export type filterSetAction = {
  payload: filterSetPayload;
  type: string;
};

export type filterSetPayload = {
  name: filterName;
  value: boolean;
};

export const initialState: filterState = {
  heart: false,
  fire: true,
  water: true,
  thunder: true,
  wind: true,
  light: true,
  dark: true,
  star5: true,
  star4: true,
  star3: true,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    toggle: (state: filterState, action: filterToggleAction) => {
      state[action.payload.name] = !state[action.payload.name];
    },
    set: (state: filterState, action: filterSetAction) => {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { toggle, set } = filterSlice.actions;
export default filterSlice.reducer;
