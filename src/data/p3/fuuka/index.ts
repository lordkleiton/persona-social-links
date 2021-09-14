import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

import image from "../../../assets/img/p3/fuuka.webp";

const fuuka = new CharacterData(
  Arcanas.priestess,
  "Fuuka",
  [],
  [],
  links,
  image
);

export default fuuka;
