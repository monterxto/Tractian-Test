import { Controller } from '@/Application/protocols';
import { FindAllAssetsController } from '@/Application/controllers/asset';
import { makeFindAllAssetUseCase } from '@/main/factories/usecases/asset';

export const makeFindAllAssetController = (): Controller => {
  const findAllAssetUseCase = makeFindAllAssetUseCase();
  return new FindAllAssetsController(findAllAssetUseCase);
};
