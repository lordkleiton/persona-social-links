import { Dialog } from "../../../enums/dialog";
import { CharacterLinks } from "../../../models/character_links";

const one: string[] = [Dialog.automatic];
const two: string[] = ['Say "Toughen up"', Dialog.anything, Dialog.anything];
const three: string[] = ['Say "Are you sure you\'re okay?"', "Will it heal?"];
const four: string[] = [Dialog.anything, "That sucks"];
const five: string[] = [
  'Say "The hospital again?"',
  "Let him use your shoulder",
];
const six: string[] = [
  'Say "Suck it up"',
  "Is it that important?",
  "What will happen to your knee?",
];
const seven: string[] = ['Ask "How\'s your knee?"', "You need to toughen up"];
const eight: string[] = ["Look away"];
const nine: string[] = ['Say "I\'m fine"'];
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
