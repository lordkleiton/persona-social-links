import { Arcanas } from "../enums/arcanas";
import { capitalize } from "./misc";

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

export const tryGetArcanaKeyByValue = (value: string) => {
  const parts = value.split(" ");
  const newParts = [parts[0].toLocaleLowerCase()];

  if (parts.length > 1) {
    const auxParts = parts
      .slice(1, parts.length)
      .map((part) => capitalize(part));

    newParts.push(...auxParts);
  }

  const newStr = newParts.reduce((acc, curr) => acc + curr, "");
  const hasArcana = !!Arcanas[newStr];

  return hasArcana ? newStr : null;
};
