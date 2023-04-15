import { CategoryEntity } from "../../infrastructure/persistence/mongo/CategoryEntity";
import { CategoryDTO } from "../DTOs/CategoryDTO";
import { CategoryModel } from "../models/CategoryModel";
import { CategoryRepository } from "./CategoryRepository";

export class MongoRepositoryCategoryImpl implements CategoryRepository {
  async create(category: CategoryModel): Promise<CategoryDTO> {
    const savedCategory: CategoryModel = await CategoryEntity.create(category);

    const { id, name } = savedCategory;

    return new CategoryDTO(id, name);
  }

  async categoryFindName(categoryName: string): Promise<CategoryDTO | null> {
    const category: CategoryModel | null = await CategoryEntity.findOne({
      name: categoryName,
    });

    if (!category) return null;

    const { id, name } = category;

    return new CategoryDTO(id, name);
  }
}
