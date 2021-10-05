import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

import image from "../../../assets/img/p4/marie.png";

const marie = new CharacterData(Arcanas.aeon, "Marie", [], [], links, image);

export default marie;
