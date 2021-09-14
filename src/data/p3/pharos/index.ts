import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

import image from "../../../assets/img/p3/pharos.webp";

const pharos = new CharacterData(Arcanas.death, "Pharos", [], [], links, image);

export default pharos;
