import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

import image from "../../../assets/img/p3/chihiro.webp";

const chihiro = new CharacterData(
  Arcanas.justice,
  "Chihiro",
  [],
  [],
  links,
  image
);

export default chihiro;
