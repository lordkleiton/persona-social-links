import { CharacterLinks } from "../../../models/character_links";

const one: string[] = ["Automatic"];
const two: string[] = ['Say "Pink\'s cute"', "That's messed up"];
const three: string[] = ["Say anything"];
const four: string[] = ['Ask "Are you all right?"'];
const five: string[] = [
  "Say anything",
  "Say anything",
  "Say anything",
  "Try to cheer her up",
];
const six: string[] = ['Say "Anytime"'];
const seven: string[] = ['Say "Sounds good"'];
const eight: string[] = ['Say "All right"', "Anything"];
const nine: string[] = ['".........."'];
const ten: string[] = ["Automatic"];

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
