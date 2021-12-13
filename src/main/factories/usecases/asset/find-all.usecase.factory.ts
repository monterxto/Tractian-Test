import { makeDbFindAllAsset } from '@/main/factories/infra/repositories/mongodb';
import { IFindAllAssetUseCase, FindAllAssetUseCase } from '@/core/usecases/asset/find_all';

export const makeFindAllAssetUseCase = (): IFindAllAssetUseCase => {
  return new FindAllAssetUseCase(makeDbFindAllAsset());
};
