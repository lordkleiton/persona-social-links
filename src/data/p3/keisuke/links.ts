import { Dialog } from "../../../enums/dialog";
import { CharacterLinks } from "../../../models/character_links";

const one: string[] = [Dialog.automatic];
const two: string[] = [Dialog.anything, Dialog.anything];
const three: string[] = ["Great job!", Dialog.anything];
const four: string[] = [Dialog.anything, "Complaining won't help"];
const five: string[] = ["You should tell your dad"];
const six: string[] = [Dialog.anything, "Do whatever you want"];
const seven: string[] = ["Are you gonna be a doctor?"];
const eight: string[] = ["Yeah I'm fine", Dialog.anything, Dialog.anything];
const nine: string[] = [
  "Try to stop him",
  Dialog.anything,
  Dialog.anything,
  Dialog.anything,
  Dialog.anything,
];
const ten: string[] = [Dialog.automatic];

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
