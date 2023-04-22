import { Request, Response } from "express";
import { v4 } from "uuid";
import { CreateCategoryUseCase } from "../../../context/anfisa/category/aplication/CreateCategoryUseCase";
import { CategoryRepository } from "../../../context/anfisa/category/domain/repositories/CategoryRepository";
import { MongoRepositoryCategoryImpl } from "../../../context/anfisa/category/infrastructure/persistence/mongo/MongoRepositoryCategoryImpl";
import { CategoryValueObject } from "../../../context/anfisa/category/domain/valueObject/CategoryValueObject";

export class CreateCategoryController {
  private _categoryRepository: CategoryRepository;
  private _createCategoryUseCase: CreateCategoryUseCase;

  constructor() {
    this._categoryRepository = new MongoRepositoryCategoryImpl();
    this._createCategoryUseCase = new CreateCategoryUseCase(
      this._categoryRepository
    );
  }

  run = async (req: Request, res: Response): Promise<void> => {
    const { body } = req;

    try {
      const categoryId = v4();
      const category = new CategoryValueObject(
        categoryId,
        body.name,
        body.image
      );

      const data = await this._createCategoryUseCase.run(category);

      res.status(201).json(data);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  };
}
