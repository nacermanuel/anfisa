import { Request, Response } from "express";
import { CategoryRepository } from "../../../context/anfisa/category/domain/repositories/CategoryRepository";
import { MongoRepositoryCategoryImpl } from "../../../context/anfisa/category/infrastructure/persistence/mongo/MongoRepositoryCategoryImpl";
import { FindAllCategoriesUseCase } from "../../../context/anfisa/category/aplication/FindAllCategoriesUseCase";

export class FindAllCategoriesController {
  private _categoryRepository: CategoryRepository;
  private _findAllCategoryUseCase: FindAllCategoriesUseCase;

  constructor() {
    this._categoryRepository = new MongoRepositoryCategoryImpl();
    this._findAllCategoryUseCase = new FindAllCategoriesUseCase(
      this._categoryRepository
    );
  }

  run = async (_req: Request, res: Response): Promise<void> => {
    try {
      const data = await this._findAllCategoryUseCase.run();

      res.status(200).json(data);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  };
}
