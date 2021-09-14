import { LinkLevels } from "../interfaces/link_levels";

const baseArray: string[] = [];

export class CharacterLinks implements LinkLevels {
  first: string[];
  second: string[];
  third: string[];
  fourth: string[];
  fifth: string[];
  sixth: string[];
  seventh: string[];
  eighth: string[];
  ninth: string[];
  tenth: string[];

  constructor(
    first: string[] = baseArray,
    second: string[] = baseArray,
    third: string[] = baseArray,
    fourth: string[] = baseArray,
    fifth: string[] = baseArray,
    sixth: string[] = baseArray,
    seventh: string[] = baseArray,
    eighth: string[] = baseArray,
    nineth: string[] = baseArray,
    tenth: string[] = baseArray
  ) {
    this.first = first;
    this.second = second;
    this.third = third;
    this.fourth = fourth;
    this.fifth = fifth;
    this.sixth = sixth;
    this.seventh = seventh;
    this.eighth = eighth;
    this.ninth = nineth;
    this.tenth = tenth;
  }
}
