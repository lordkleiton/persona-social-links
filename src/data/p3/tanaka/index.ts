import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

import image from "../../../assets/img/p3/tanaka.webp";

const tanaka = new CharacterData(Arcanas.devil, "Tanaka", [], [], links, image);

export default tanaka;
