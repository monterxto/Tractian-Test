import { Controller } from '@/Application/protocols';
import { FindAssetByUnitIdController } from '@/Application/controllers/asset';
import { makeFindAssetByUnitIdUseCase } from '@/main/factories/usecases/asset';
import { makeFindAssetByUnitIdValidation } from '@/main/factories/application/validation/asset';

export const makeFindAssetByUnitIdController = (): Controller => {
  const findAssetByUnitIdUseCase = makeFindAssetByUnitIdUseCase();
  const findAssetByUnitIdValidation = makeFindAssetByUnitIdValidation();
  return new FindAssetByUnitIdController(findAssetByUnitIdUseCase, findAssetByUnitIdValidation);
};
