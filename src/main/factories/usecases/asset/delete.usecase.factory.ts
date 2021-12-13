import {
  makeDbDeleteAsset,
  makeDbFindAssetById,
} from '@/main/factories/infra/repositories/mongodb';
import { IDeleteAssetUseCase, DeleteAssetUseCase } from '@/core/usecases/asset/delete';

export const makeDeleteAssetUseCase = (): IDeleteAssetUseCase => {
  return new DeleteAssetUseCase(makeDbDeleteAsset(), makeDbFindAssetById());
};
