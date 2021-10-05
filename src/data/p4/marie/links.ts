import { Dialog } from "../../../enums/dialog";
import { CharacterLinks } from "../../../models/character_links";

const one: string[] = Array(6).fill(Dialog.anything);
const two: string[] = Array(5).fill(Dialog.anything);
const three: string[] = Array(7).fill(Dialog.anything);
const four: string[] = ["It's fun/It's pretty much my duty"].concat(Array(3).fill(Dialog.anything));
const five: string[] = Array(4).fill(Dialog.anything);
const six: string[] = Array(6).fill(Dialog.anything);
const seven: string[] = Array(8).fill(Dialog.anything);
const eight: string[] = Array(2).fill(Dialog.anything);
const nine: string[] = Array(2).fill(Dialog.anything).concat([
  "[Lover] Because I love You/[Friend] Because you're my friend", "[Lover] Hug her/[Friend] Don't hug her"
]);
const ten: string[] = ["[Friend] It was fun/[Lover] Anything", "[Lover] Anything"];

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
