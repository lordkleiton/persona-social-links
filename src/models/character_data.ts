import { Arcanas } from "../enums/arcanas";
import { CharacterInfo } from "../interfaces/character_info";
import { LinkLevels } from "../interfaces/link_levels";
import { CharacterLinks } from "./character_links";

const baseArray: string[] = [];

export class CharacterData implements CharacterInfo {
  readonly unlock_conditions: string[];
  readonly weekly_availability: string[];
  readonly link_levels: LinkLevels;
  readonly arcana: Arcanas;
  readonly name: string;

  constructor(
    arcana: Arcanas = Arcanas.aeon,
    name: string = "Empty",
    unlock_conditions: string[] = baseArray,
    weekly_availability: string[] = baseArray,
    link_levels: LinkLevels = new CharacterLinks()
  ) {
    this.unlock_conditions = unlock_conditions;
    this.weekly_availability = weekly_availability;
    this.link_levels = link_levels;
    this.arcana = arcana;
    this.name = name;
  }
}
