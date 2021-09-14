import { CharacterLinks } from "../../../models/character_links";

const one: string[] = ["Automatic on April 18th"];
const two: string[] = ["Automatic on April 20th"];
const three: string[] = ["Automatic on May 9th"];
const four: string[] = ["Automatic on July 7th"];
const five: string[] = ["Automatic on July 22nd"];
const six: string[] = ["Automatic on November 2nd"];
const seven: string[] = ["Automatic on November 4th"];
const eight: string[] = ["Skips to Rank 9"];
const nine: string[] = ["Automatic on November 28th"];
const ten: string[] = ["Choose to spare Ryoji on December 31st"];

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
