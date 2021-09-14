import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

import image from "../../../assets/img/p3/bebe.webp";

const bebe = new CharacterData(
  Arcanas.temperance,
  "Bebe",
  [],
  [],
  links,
  image
);

export default bebe;
