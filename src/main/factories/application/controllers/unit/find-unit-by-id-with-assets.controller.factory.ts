import { Controller } from '@/Application/protocols';
import { FindUnitByIdWithAssetsController } from '@/Application/controllers/unit';
import { makeFindUnitByIdWithAssetsUseCase } from '@/main/factories/usecases/unit';
import { makeFindUnitByIdWithAssetsValidation } from '@/main/factories/application/validation/unit';

export const makefindUnitByIdWithAssetsController = (): Controller => {
  const findByIdWithAssetsUseCase = makeFindUnitByIdWithAssetsUseCase();
  const findUnitByIdWithAssetsValidation = makeFindUnitByIdWithAssetsValidation();
  return new FindUnitByIdWithAssetsController(
    findByIdWithAssetsUseCase,
    findUnitByIdWithAssetsValidation
  );
};
