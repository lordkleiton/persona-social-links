import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

const maya = new CharacterData(Arcanas.hermit, "Maya", [], [], links);

export default maya;
