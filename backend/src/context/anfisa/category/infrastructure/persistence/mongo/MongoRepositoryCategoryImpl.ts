import { CategoryEntity } from "./CategoryEntity";
import { CategoryDTO } from "../../../domain/DTOs/CategoryDTO";
import { CategoryModel } from "../../../domain/models/CategoryModel";
import { CategoryRepository } from "../../../domain/repositories/CategoryRepository";

export class MongoRepositoryCategoryImpl implements CategoryRepository {
  async findAllCategories(): Promise<CategoryDTO[]> {
    const category: CategoryModel[] = await CategoryEntity.find({});

    const categories: CategoryDTO[] = category.map((category) => {
      const data = new CategoryDTO(category.id, category.name, category.image);

      return data;
    });

    return categories;
  }

  async create(category: CategoryModel): Promise<CategoryDTO> {
    const savedCategory: CategoryModel = await CategoryEntity.create(category);

    const { id, name, image } = savedCategory;

    return new CategoryDTO(id, name, image);
  }

  async categoryFindName(categoryName: string): Promise<CategoryDTO | null> {
    const category: CategoryModel | null = await CategoryEntity.findOne({
      name: categoryName,
    });

    if (!category) return null;

    const { id, name, image } = category;

    return new CategoryDTO(id, name, image);
  }
}
