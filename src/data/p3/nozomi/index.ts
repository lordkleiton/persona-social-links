import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

import image from "../../../assets/img/p3/nozomi.webp";

const nozomi = new CharacterData(Arcanas.moon, "Nozomi", [], [], links, image);

export default nozomi;
