import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

import image from "../../../assets/img/p3/mutatsu.webp";

const mutatsu = new CharacterData(
  Arcanas.tower,
  "Mutatsu",
  [],
  [],
  links,
  image
);

export default mutatsu;
