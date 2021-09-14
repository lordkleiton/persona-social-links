import { Dialog } from "../../../enums/dialog";
import { CharacterLinks } from "../../../models/character_links";

const one: string[] = ["Automatic after the three flags have been activated"];
const two: string[] = [
  "Don't worry about it",
  "I read the classics/I read manga",
  "Not really",
];
const three: string[] = ["How rude", "I agree"];
const four: string[] = [Dialog.anything, "Speak to her calmly"];
const five: string[] = [
  "So, how was it?",
  "It's just a coincidence",
  "Don't be so hard on yourself",
  "Hold her hand",
];
const six: string[] = ["Is it good", "What do you mean?"];
const seven: string[] = ["You're not to blame", "We have to do something"];
const eight: string[] = [Dialog.anything, "Talk to the teacher"];
const nine: string[] = [
  "Don't worry, she'll help us",
  "Wait and see what happens",
  Dialog.anything,
  "What's wrong",
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
