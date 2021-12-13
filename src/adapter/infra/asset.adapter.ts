import { Asset } from '@/core/entities/asset.entity';
import { AssetDocument } from '@/infra/entities/mongodb';

export class AssetAdapter {
  static create(asset: AssetDocument): Asset {
    return new Asset(
      asset.imageUrl,
      asset.name,
      asset.description,
      asset.model,
      asset.owner,
      asset.status,
      asset.unitId,
      asset.healthLevel,
      asset._id
    );
  }

  static createList(assets: AssetDocument[]): Asset[] {
    return assets.map(
      (asset) =>
        new Asset(
          asset.imageUrl,
          asset.name,
          asset.description,
          asset.model,
          asset.owner,
          asset.status,
          asset.unitId,
          asset.healthLevel,
          asset._id
        )
    );
  }
}
