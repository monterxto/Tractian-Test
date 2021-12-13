import { Controller } from '@/Application/protocols';
import { FindAssetByIdController } from '@/Application/controllers/asset';
import { makeFindAssetByIdUseCase } from '@/main/factories/usecases/asset';

export const makeFindAssetByIdController = (): Controller => {
  const findAssetByIdUseCase = makeFindAssetByIdUseCase();
  return new FindAssetByIdController(findAssetByIdUseCase);
};
