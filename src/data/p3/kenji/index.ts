import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

import image from "../../../assets/img/p3/kenji.webp";

const kenji = new CharacterData(
  Arcanas.magician,
  "Kenji",
  [],
  [],
  links,
  image
);

export default kenji;
