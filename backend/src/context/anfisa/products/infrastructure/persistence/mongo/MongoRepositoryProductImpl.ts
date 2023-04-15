import { ProductsRespDTO } from "../../../domain/DTOs/ProductsRespDTO";
import { ProductModel } from "../../../domain/models/ProductModel";
import { ProductRepository } from "../../../domain/repositories/ProductRepository";
import { ProductEntity } from "./ProductEntity";

export class MongoRepositoryProductImpl implements ProductRepository {
  async productFindById(productId: string): Promise<ProductsRespDTO | null> {
    const product: ProductModel | null = await ProductEntity.findOne({
      id: productId,
    });

    if (!product) return null;

    const {
      id,
      price,
      name,
      description,
      avalible,
      image,
      amount,
      brand,
      category,
      relevant,
    } = product;

    return new ProductsRespDTO(
      id,
      price,
      name,
      description,
      avalible,
      image,
      amount,
      brand,
      category,
      relevant
    );
  }

  async productFindAll(): Promise<ProductsRespDTO[]> {
    const product: ProductModel[] = await ProductEntity.find({});

    const Products: ProductsRespDTO[] = product.map((product) => {
      const data = new ProductsRespDTO(
        product.id,
        product.price,
        product.name,
        product.description,
        product.avalible,
        product.image,
        product.amount,
        product.brand,
        product.category,
        product.relevant
      );

      return data;
    });

    return Products;
  }
  async productFindName(productName: string): Promise<ProductsRespDTO | null> {
    const product: ProductModel | null = await ProductEntity.findOne({
      name: productName,
    });

    if (!product) return null;

    const {
      id,
      price,
      name,
      description,
      avalible,
      image,
      amount,
      brand,
      category,
      relevant,
    } = product;

    return new ProductsRespDTO(
      id,
      price,
      name,
      description,
      avalible,
      image,
      amount,
      brand,
      category,
      relevant
    );
  }

  async create(product: ProductModel): Promise<ProductsRespDTO> {
    const saveProduct: ProductModel = await ProductEntity.create(product);

    const {
      id,
      price,
      name,
      description,
      avalible,
      image,
      amount,
      brand,
      category,
      relevant,
    } = saveProduct;

    return new ProductsRespDTO(
      id,
      price,
      name,
      description,
      avalible,
      image,
      amount,
      brand,
      category,
      relevant
    );
  }

  async update(
    productId: string,
    product: ProductModel
  ): Promise<ProductsRespDTO | null> {
    const productFind: ProductsRespDTO | null =
      await ProductEntity.findOneAndUpdate(
        {
          id: productId,
        },
        product,
        { new: true }
      );

    if (!productFind) return null;

    const {
      id,
      price,
      name,
      description,
      avalible,
      image,
      amount,
      brand,
      category,
      relevant,
    } = productFind;

    return new ProductsRespDTO(
      id,
      price,
      name,
      description,
      avalible,
      image,
      amount,
      brand,
      category,
      relevant
    );
  }
}
