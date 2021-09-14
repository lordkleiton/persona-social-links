import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

import image from "../../../assets/img/p3/hidetoshi.webp";

const hidetoshi = new CharacterData(
  Arcanas.emperor,
  "Hidetoshi",
  [],
  [],
  links,
  image
);

export default hidetoshi;
