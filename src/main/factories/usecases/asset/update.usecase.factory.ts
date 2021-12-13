import {
  makeDbUpdateAsset,
  makeDbFindAssetById,
} from '@/main/factories/infra/repositories/mongodb';
import { IUpdateAssetUseCase, UpdateAssetUseCase } from '@/core/usecases/asset/update';

export const makeUpdateAssetUseCase = (): IUpdateAssetUseCase => {
  return new UpdateAssetUseCase(makeDbUpdateAsset(), makeDbFindAssetById());
};
