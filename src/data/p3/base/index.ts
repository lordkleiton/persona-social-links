import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

const base = new CharacterData(Arcanas.fool, "", [], [], links);

export default base;
