import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

import image from "../../../assets/img/p3/aigis.webp";

const aigis = new CharacterData(Arcanas.aeon, "Aigis", [], [], links, image);

export default aigis;
