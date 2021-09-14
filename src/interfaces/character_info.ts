import { Arcanas } from "../enums/arcanas";
import { LinkLevels } from "./link_levels";

export interface CharacterInfo {
  readonly unlock_conditions: string[];
  readonly weekly_availability: string[];
  readonly link_levels: LinkLevels;
  readonly arcana: Arcanas;
  readonly name: string;
}
