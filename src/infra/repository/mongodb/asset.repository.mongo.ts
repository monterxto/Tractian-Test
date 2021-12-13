import {
  ICreateAssetRepository,
  IFindAllAssetRepository,
  IFindAssetByIdRepository,
  IFindByUnitIdAssetRepository,
  IUpdateAssetRepository,
  IDeleteAssetRepository,
} from '@/core/repositories/asset';
import { AssetModel, AssetDocument } from '@/infra/entities/mongodb';
import { Asset } from '@/core/entities/asset.entity';
import { AssetAdapter } from '@/adapter/infra';
import { UpdateAssetUseCaseRequestDTO } from '@/core/usecases/asset/update';

export class AssetMongoRepository
  implements
    ICreateAssetRepository,
    IFindAllAssetRepository,
    IFindAssetByIdRepository,
    IFindByUnitIdAssetRepository,
    IUpdateAssetRepository,
    IDeleteAssetRepository
{
  async create(asset: Asset): Promise<Asset> {
    try {
      const assetCreated: AssetDocument = await AssetModel.create(asset);
      return AssetAdapter.create(assetCreated);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll(): Promise<Asset[]> {
    try {
      const assets: AssetDocument[] = await AssetModel.find();
      return AssetAdapter.createList(assets);
    } catch (error) {
      console.log(error);
    }
  }

  async findById(id: string): Promise<Asset> {
    try {
      const asset: AssetDocument = await AssetModel.findById(id);
      if (!asset) return null;
      return AssetAdapter.create(asset);
    } catch (error) {
      console.log(error);
    }
  }

  async findByUnitId(unitId: string): Promise<Asset[]> {
    try {
      const assets: AssetDocument[] = await AssetModel.find({ unitId });
      return AssetAdapter.createList(assets);
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: string, updateDtoRequest: Partial<UpdateAssetUseCaseRequestDTO>): Promise<void> {
    try {
      await AssetModel.updateOne({ _id: id }, updateDtoRequest);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await AssetModel.deleteOne({ _id: id });
    } catch (error) {
      console.log(error);
    }
  }
}
