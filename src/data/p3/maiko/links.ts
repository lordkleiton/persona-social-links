import { Dialog } from "../../../enums/dialog";
import { CharacterLinks } from "../../../models/character_links";

const one: string[] = [Dialog.automatic];
const two: string[] = ["Sure, Let's go", Dialog.anything, Dialog.anything];
const three: string[] = [Dialog.anything, "Don't worry, he'll be there"];
const four: string[] = ["I'm happy for you/Nobody could forget you"];
const five: string[] = ["That's terrible", "That isn't true"];
const six: string[] = [
  "Calm down/Sounds like a plan",
  "You don't need that stuff",
];
const seven: string[] = [Dialog.anything, Dialog.anything];
const eight: string[] = ["Hamburgers", "Yeah, you did good", "Choose your dad"];
const nine: string[] = ["We're friends forever"];
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
