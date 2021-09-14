import { Dialog } from "../../../enums/dialog";
import { CharacterLinks } from "../../../models/character_links";

const one: string[] = [Dialog.automatic];
const two: string[] = ["Yeah, no problem"];
const three: string[] = [Dialog.anything, Dialog.anything];
const four: string[] = [
  Dialog.anything,
  "Sounds like a good plan",
  "Yeah, I bet she would be",
];
const five: string[] = ["Are you ok?", "We should come here again"];
const six: string[] = [
  Dialog.anything,
  Dialog.anything,
  Dialog.anything,
  "Hey, no problem",
];
const seven: string[] = [
  "I don't mind",
  Dialog.anything,
  Dialog.anything,
  "Don't give up!",
];
const eight: string[] = ["You should get some more", Dialog.anything];
const nine: string[] = [
  "And you won?",
  "Do a victory celebration",
  Dialog.anything,
  "Thank him for his generosity",
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
