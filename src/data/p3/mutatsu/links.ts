import { Dialog } from "../../../enums/dialog";
import { CharacterLinks } from "../../../models/character_links";

const one: string[] = [Dialog.automatic];
const two: string[] = ["None of your business", "I'm sorry, um?"];
const three: string[] = ["I don't have any friends"];
const four: string[] = ["Yeah that might look cool"];
const five: string[] = ["I have enough", "Yes"];
const six: string[] = ["You should go home", "What about the others?"];
const seven: string[] = ["I don't think you should"];
const eight: string[] = [
  "Dad?",
  "I was with a friend/None of your business",
  Dialog.anything,
  "Are you running away?",
];
const nine: string[] = [Dialog.anything, Dialog.anything, Dialog.anything];
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
