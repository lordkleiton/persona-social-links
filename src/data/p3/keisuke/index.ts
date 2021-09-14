import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

import image from "../../../assets/img/p3/keisuke.webp";

const keisuke = new CharacterData(
  Arcanas.fortune,
  "Keisuke",
  [],
  [],
  links,
  image
);

export default keisuke;
