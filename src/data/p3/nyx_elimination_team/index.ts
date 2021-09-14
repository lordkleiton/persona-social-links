import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

import image from "../../../assets/img/p3/sees.webp";

const nyx_elimination_team = new CharacterData(
  Arcanas.judgement,
  "Nyx Annihilation Team",
  [],
  [],
  links,
  image
);

export default nyx_elimination_team;
