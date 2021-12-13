import { Controller } from '@/Application/protocols';
import { DeleteAssetsController } from '@/Application/controllers/asset';
import { makeDeleteAssetUseCase } from '@/main/factories/usecases/asset';

export const makeDeleteAssetController = (): Controller => {
  const deleteAssetUseCase = makeDeleteAssetUseCase();
  return new DeleteAssetsController(deleteAssetUseCase);
};
