import {
  ICreateAssetRepository,
  IFindAllAssetRepository,
  IFindAssetByIdRepository,
  IFindByUnitIdAssetRepository,
  IUpdateAssetRepository,
  IDeleteAssetRepository,
} from '@/core/repositories/asset';
import { AssetMongoRepository } from '@/infra/repository/mongodb/asset.repository.mongo';

export const makeDbCreateAsset = (): ICreateAssetRepository => {
  return new AssetMongoRepository();
};

export const makeDbFindAllAsset = (): IFindAllAssetRepository => {
  return new AssetMongoRepository();
};

export const makeDbFindAssetById = (): IFindAssetByIdRepository => {
  return new AssetMongoRepository();
};

export const makeDbFindAssetByUnitId = (): IFindByUnitIdAssetRepository => {
  return new AssetMongoRepository();
};

export const makeDbUpdateAsset = (): IUpdateAssetRepository => {
  return new AssetMongoRepository();
};

export const makeDbDeleteAsset = (): IDeleteAssetRepository => {
  return new AssetMongoRepository();
};
