import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

import image from "../../../assets/img/p3/yukari.webp";

const yukari = new CharacterData(
  Arcanas.lovers,
  "Yukari",
  [],
  [],
  links,
  image
);

export default yukari;
