import { Asset } from '@/core/entities/asset.entity';

export interface IFindAssetByIdRepository {
  findById(id: string): Promise<Asset>;
}
