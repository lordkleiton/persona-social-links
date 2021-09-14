import { Dialog } from "../../../enums/dialog";
import { CharacterLinks } from "../../../models/character_links";

const one: string[] = [Dialog.automatic];
const two: string[] = ["Of course", "The outdoors are overrated"];
const three: string[] = ["Oh really?", "So you don't like your job?"];
const four: string[] = ["Why don't we get married?"];
const five: string[] = [
  "Don't you mean S.O.B",
  "Are you a teacher?/You're a drunken boxing sensei",
];
const six: string[] = ["Which bastard?"];
const seven: string[] = ["Guys only go for younger chicks", Dialog.anything];
const eight: string[] = ["Hurry up and tell me already", "What's he like"];
const nine: string[] = ["No way!", Dialog.anything, "What're you planning?"];
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
