import { BrandModel } from "../model/BrandModel";

export class BrandRValueObject implements BrandModel {
  readonly id: string;
  readonly name: string;
  readonly image: string;

  constructor(id: string, name: string, image: string) {
    this.id = id;
    this.name = name;
    this.image = image;
  }
}
