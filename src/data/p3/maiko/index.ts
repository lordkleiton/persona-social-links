import { Arcanas } from "../../../enums/arcanas";
import { CharacterData } from "../../../models/character_data";
import links from "./links";

const maiko = new CharacterData(Arcanas.hangedMan, "Maiko", [], [], links);

export default maiko;
