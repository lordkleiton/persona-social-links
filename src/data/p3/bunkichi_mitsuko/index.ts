import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

import image from "../../../assets/img/p3/bunkichi_mitsuko.webp";

const bunkichi_mitsuko = new CharacterData(
  Arcanas.hierophant,
  "Bunkichi & Mitsuko",
  [],
  [],
  links,
  image
);

export default bunkichi_mitsuko;
