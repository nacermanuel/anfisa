export class ProductsRespDTO {
  readonly id: string;
  readonly price: number;
  readonly name: string;
  readonly description: string;
  readonly avalible: boolean;
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
    avalible: boolean,
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
    this.avalible = avalible;
    this.image = image;
    this.amount = amount;
    this.brand = brand;
    this.category = category;
    this.relevant = relevant;
  }
}
