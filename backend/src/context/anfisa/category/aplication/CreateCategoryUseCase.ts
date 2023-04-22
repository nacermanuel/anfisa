import { CategoryDTO } from "../domain/DTOs/CategoryDTO";
import { CategoryAlreadyExists } from "../domain/errors/CategoryAlreadyExists";
import { CategoryModel } from "../domain/models/CategoryModel";
import { CategoryRepository } from "../domain/repositories/CategoryRepository";

export class CreateCategoryUseCase {
  private _categoryRepository: CategoryRepository;

  constructor(brandrepository: CategoryRepository) {
    this._categoryRepository = brandrepository;
  }

  async run(brand: CategoryModel): Promise<CategoryDTO> {
    const findCategory = await this._categoryRepository.categoryFindName(
      brand.name
    );

    if (findCategory) throw new CategoryAlreadyExists();

    const newCategory = await this._categoryRepository.create(brand);

    const { id, name, image } = newCategory;

    return new CategoryDTO(id, name, image);
  }
}
