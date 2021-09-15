import { Arcanas } from "../enums/arcanas";

interface IArcanaItem {
  readonly key: string;
  readonly value: Arcanas;
}

class ArcanaItem implements IArcanaItem {
  constructor(readonly key: string, readonly value) {}
}

export const arcanasArray = () => {
  let result: ArcanaItem[] = [];

  for (let key in Arcanas) {
    result.push(new ArcanaItem(key, Arcanas[key]));
  }

  return result;
};
