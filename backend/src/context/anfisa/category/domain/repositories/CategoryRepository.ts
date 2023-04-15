import { CategoryDTO } from "../DTOs/CategoryDTO";
import { CategoryModel } from "../models/CategoryModel";

export interface CategoryRepository {
  create(category: CategoryModel): Promise<CategoryDTO>;
  categoryFindName(categoryName: string): Promise<CategoryDTO | null>;
  findAllCategories(): Promise<CategoryDTO[]>;
}
