import { Dialog } from "../../../enums/dialog";
import { CharacterLinks } from "../../../models/character_links";

const one: string[] = ["Automatic after Chariot rank 3"];
const two: string[] = ["What happened?", "I agree", "That's true"];
const three: string[] = ["Not really", Dialog.anything, "Let's go"];
const four: string[] = [
  Dialog.anything,
  Dialog.anything,
  "No worries",
  "I'm honored",
];
const five: string[] = [Dialog.anything, "Do you know him?", "It's up to you"];
const six: string[] = ["Let's hope for the best"];
const seven: string[] = ["Are you relieved?", "Sure"];
const eight: string[] = [Dialog.anything, "A boy/A girl"];
const nine: string[] = ["Forget about what?", "An instructor"];
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
