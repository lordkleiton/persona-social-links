import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

import image from "../../../assets/img/p3/akinari.webp";

const akinari = new CharacterData(Arcanas.sun, "Akinari", [], [], links, image);

export default akinari;
