import { Dialog } from "../../../enums/dialog";
import { CharacterLinks } from "../../../models/character_links";

const one: string[] = [Dialog.automatic];
const two: string[] = ["Sure, okay"];
const three: string[] = ["You are the Gourmet King"];
const four: string[] = ["Oh, are you sick?"];
const five: string[] = ["Yeah, that's right"];
const six: string[] = ["Are you feeling sick?"];
const seven: string[] = ["Wiped off the face of ??", Dialog.anything];
const eight: string[] = ["Oh brother"];
const nine: string[] = [Dialog.anything, Dialog.anything];
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
