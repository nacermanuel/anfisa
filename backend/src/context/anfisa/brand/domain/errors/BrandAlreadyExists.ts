export class BrandAlreadyExists extends Error {
    constructor() {
      super("Brand already exists");
    }
  }