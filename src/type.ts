export type charName = "Rolf" | "Marina" | "Clarisse" | "Bianca" | "Vyron";
export type itemName =
  | "mana"
  | "dream_coat_of_arms"
  | "element_fire_3"
  | "element_fire_4"
  | "ether_fire_1"
  | "ether_fire_2"
  | "ether_fire_3";
export type element = "fire" | "water" | "thunder" | "wind" | "light" | "dark";
export type character = {
  element: element;
  star: number;
  name_en: charName;
  name_ko: string;
};
export type abilityStatus = "unacquired" | "need" | "acquired";
export type ability = {
  number: number;
  upgrade: number;
  status: abilityStatus;
};
export type mabo = {
  name: charName;
  element: element;
  abilities: ability[];
};
