import { ProductModel } from "../models/ProductModel";

export class ProductValueObject implements ProductModel {
  readonly id: string;
  readonly price: number;
  readonly name: string;
  readonly description: string;
  readonly available: boolean;
  readonly image: string;
  readonly amount: number;
  readonly brand: string;
  readonly category: string;
  readonly relevant: boolean;
  constructor(
    id: string,
    price: number,
    name: string,
    description: string,
    available: boolean,
    image: string,
    amount: number,
    brand: string,
    category: string,
    relevant: boolean
  ) {
    this.id = id;
    this.price = price;
    this.name = name;
    this.description = description;
    this.available = available;
    this.image = image;
    this.amount = amount;
    this.brand = brand;
    this.category = category;
    this.relevant = relevant;
  }
}
