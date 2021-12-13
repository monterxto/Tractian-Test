import { Asset } from '@/core/entities/asset.entity';

export interface IFindAllAssetRepository {
  findAll(): Promise<Asset[]>;
}
