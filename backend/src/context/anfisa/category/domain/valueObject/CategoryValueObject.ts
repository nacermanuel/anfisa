import { CategoryModel } from "../models/CategoryModel";

export class CategoryValueObject implements CategoryModel {
  readonly id: string;
  readonly name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
