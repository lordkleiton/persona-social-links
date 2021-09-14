import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

import image from "../../../assets/img/p3/mamoru.webp";

const mamoru = new CharacterData(Arcanas.star, "Mamoru", [], [], links, image);

export default mamoru;
