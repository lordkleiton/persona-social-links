import { CharacterLinks } from "../../../models/character_links";

const one: string[] = ["Automatic"];
const two: string[] = ["Say anything"];
const three: string[] = [
  "Ask her to treat you",
  "Does that make you happy",
  "Anything",
  "Agree to forget about it",
];
const four: string[] = [
  'Say "Did something happen?"',
  "It's the result of love",
  "Anything",
];
const five: string[] = [
  'Say "I\'m glad you enjoyed it"',
  "A motorcycle?",
  "Let's go for a ride",
];
const six: string[] = [
  'Say "Can I get a book for you"',
  "That's news to me?",
  "You have to reconsider",
];
const seven: string[] = ['Say "Let\'s do it"'];
const eight: string[] = [
  "Say anything",
  "Say anything",
  "Say something to the guy",
  "Anything",
];
const nine: string[] = ['Say "That makes me happy"'];
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
