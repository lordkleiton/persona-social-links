import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

import image from "../../../assets/img/p3/kazushi.webp";

const kazushi = new CharacterData(
  Arcanas.chariot,
  "Kazushi",
  [],
  [],
  links,
  image
);

export default kazushi;
