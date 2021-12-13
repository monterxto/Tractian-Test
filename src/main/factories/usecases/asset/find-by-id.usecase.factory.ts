import { makeDbFindAssetById } from '@/main/factories/infra/repositories/mongodb';
import { IFindAssetByIdUseCase, FindAssetByIdUseCase } from '@/core/usecases/asset/find_by_id';

export const makeFindAssetByIdUseCase = (): IFindAssetByIdUseCase => {
  return new FindAssetByIdUseCase(makeDbFindAssetById());
};
