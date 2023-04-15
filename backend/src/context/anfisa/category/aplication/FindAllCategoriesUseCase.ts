import { CategoryDTO } from "../domain/DTOs/CategoryDTO";
import { CategoryRepository } from "../domain/repositories/CategoryRepository";

export class FindAllCategoriesUseCase {
  private _categoryRepository: CategoryRepository;

  constructor(brandrepository: CategoryRepository) {
    this._categoryRepository = brandrepository;
  }

  async run(): Promise<CategoryDTO[]> {
    const categories = await this._categoryRepository.findAllCategories();

    return categories;
  }
}
