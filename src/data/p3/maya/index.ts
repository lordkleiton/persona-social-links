import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

import image from "../../../assets/img/p3/maya.webp";

const maya = new CharacterData(Arcanas.hermit, "Maya", [], [], links, image);

export default maya;
