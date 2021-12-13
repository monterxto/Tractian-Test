import { makeDbCreateAsset } from '@/main/factories/infra/repositories/mongodb';
import { ICreateAssetUseCase, CreateAssetUseCase } from '@/core/usecases/asset/create/';

export const makeCreateAssetUseCase = (): ICreateAssetUseCase => {
  return new CreateAssetUseCase(makeDbCreateAsset());
};
