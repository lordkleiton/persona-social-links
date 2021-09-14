import { CharacterLinks } from "../../../models/character_links";

const one: string[] = ["Automatic"];
const two: string[] = [
  "Tell him",
  "Thanks",
  "Anything",
  "Anything",
  "Anything",
];
const three: string[] = [
  'Say "Looking for something?"',
  "I'll help you look",
  "Anything",
  "Anything",
  "Anything",
];
const four: string[] = ["Anything", "Anything", "Now, you have me worried"];
const five: string[] = ['Say "I\'ll root out the truth!"', "Anything"];
const six: string[] = ['Say "Please stop quarrelling"', "Anything"];
const seven: string[] = ["Ask why she's crying", "That's great", "Anything"];
const eight: string[] = ["Anything", "Anything", "Anything"];
const nine: string[] = ["Anything", "Anything"];
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
