import { Asset } from '@/core/entities/asset.entity';

export interface IFindByUnitIdAssetRepository {
  findByUnitId(unitId: string): Promise<Asset[]>;
}
