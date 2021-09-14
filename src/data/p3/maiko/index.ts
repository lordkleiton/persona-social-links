import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

import image from "../../../assets/img/p3/maiko.webp";

const maiko = new CharacterData(
  Arcanas.hangedMan,
  "Maiko",
  [],
  [],
  links,
  image
);

export default maiko;
