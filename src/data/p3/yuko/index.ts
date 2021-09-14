import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

import image from "../../../assets/img/p3/yuko.webp";

const yuko = new CharacterData(Arcanas.strength, "Yuko", [], [], links, image);

export default yuko;
