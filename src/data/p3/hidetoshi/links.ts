import { CharacterLinks } from "../../../models/character_links";

const one: string[] = ["Automatic"];
const two: string[] = ['Say "It\'s a waste of time"'];
const three: string[] = ["Say anything"];
const four: string[] = ["Say anything", "Good work"];
const five: string[] = ['Say "They can be pretty cruel"'];
const six: string[] = ["Say anything", "But I just got here"];
const seven: string[] = ['Say "He should suffer"'];
const eight: string[] = ["Say anything", "It wasn't me"];
const nine: string[] = ['Say "Don\'t blame yourself"'];
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
