import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

import image from "../../../assets/img/p3/sees.webp";

const SEES = new CharacterData(Arcanas.fool, "SEES", [], [], links, image);

export default SEES;
