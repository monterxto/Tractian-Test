import { Asset } from '@/core/entities/asset.entity';

export interface ICreateAssetRepository {
  create(asset: Asset): Promise<Asset>;
}
