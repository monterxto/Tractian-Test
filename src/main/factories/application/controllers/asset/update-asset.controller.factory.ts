import { Controller } from '@/Application/protocols';
import { UpdateAssetController } from '@/Application/controllers/asset';
import { makeUpdateAssetUseCase } from '@/main/factories/usecases/asset';
import { makeUpdateAssetValidation } from '@/main/factories/application/validation/asset';

export const makeUpdateAssetController = (): Controller => {
  const updateAssetUseCase = makeUpdateAssetUseCase();
  const updateAssetValidation = makeUpdateAssetValidation();
  return new UpdateAssetController(updateAssetUseCase, updateAssetValidation);
};
