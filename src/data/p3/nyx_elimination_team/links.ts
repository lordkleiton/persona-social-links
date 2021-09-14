import { Dialog } from "../../../enums/dialog";
import { CharacterLinks } from "../../../models/character_links";

const one: string[] = [Dialog.automatic];
const two: string[] = ["Reach floor 215 of Tartarus"];
const three: string[] = [
  "Reach floor 220 of Tartarus and defeat Noble Seeker (Resists 4 elements)",
];
const four: string[] = ["Reach floor 224 of Tartarus"];
const five: string[] = [
  "Reach floor 228 of Tartarus and defeat Carnal Snake (Resist Fire, Elec and Wind)",
];
const six: string[] = [
  "Reach floor 236 of Tartarus and defeat World Balance (Resist Physical)",
];
const seven: string[] = ["Reach floor 240 of Tartarus"];
const eight: string[] = [
  "Reach floor 244 of Tartarus and defeat Fierce Cyclops (Blocks Elec, Resists Slash, Strike and Fire)",
];
const nine: string[] = [
  "Reach floor 252 of Tartarus and defeat the Jotun of Grief (Use only pierce melee weapons)",
];
const ten: string[] = ["Reach floor 254 of Tartarus"];

export default new CharacterLinks(
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten
);
