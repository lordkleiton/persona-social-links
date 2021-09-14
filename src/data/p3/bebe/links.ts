import { Dialog } from "../../../enums/dialog";
import { CharacterLinks } from "../../../models/character_links";

const one: string[] = [Dialog.automatic];
const two: string[] = [Dialog.anything, "Yeah, Japan is great"];
const three: string[] = [
  Dialog.anything,
  "Something traditional (Temperance Persona Required)",
];
const four: string[] = ["Are you alright?", Dialog.anything];
const five: string[] = ["Sure", "Then stay"];
const six: string[] = ["Take a break", "Let's go", "Support him"];
const seven: string[] = ["That's a good idea"];
const eight: string[] = ["He'll agree for sure"];
const nine: string[] = ["Ask about his country"];
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
