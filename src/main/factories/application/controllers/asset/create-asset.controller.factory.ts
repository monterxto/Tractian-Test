import { Controller } from '@/Application/protocols';
import { CreateAssetController } from '@/Application/controllers/asset';
import { makeCreateAssetUseCase } from '@/main/factories/usecases/asset';
import { makeCreateAssetValidation } from '@/main/factories/application/validation/asset';

export const makeCreateAssetController = (): Controller => {
  const createAssetUseCase = makeCreateAssetUseCase();
  const createAssetValidation = makeCreateAssetValidation();
  return new CreateAssetController(createAssetUseCase, createAssetValidation);
};
