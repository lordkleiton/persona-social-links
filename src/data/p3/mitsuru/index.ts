import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

import image from "../../../assets/img/p3/mitsuru.webp";

const mitsuru = new CharacterData(
  Arcanas.empress,
  "Mitsuru",
  [],
  [],
  links,
  image
);

export default mitsuru;
