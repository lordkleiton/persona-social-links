import { Dialog } from "../../../enums/dialog";
import { CharacterLinks } from "../../../models/character_links";

const one: string[] = [Dialog.automatic];
const two: string[] = ["I like it"];
const three: string[] = [Dialog.anything, "That's not true"];
const four: string[] = [Dialog.anything, "All right"];
const five: string[] = ["You may be right"];
const six: string[] = ["No, you didn't/He saw me as a boyfriend"];
const seven: string[] = [Dialog.anything, Dialog.anything, Dialog.anything];
const eight: string[] = ["I'm doing it now", Dialog.anything];
const nine: string[] = ["You're right"];
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
