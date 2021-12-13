import { IFindAllAssetRepository } from '@/core/repositories/asset';
import { IFindAllAssetUseCase, FindAllAssetUseCaseResponseDTO } from './';

export class FindAllAssetUseCase implements IFindAllAssetUseCase {
  constructor(private readonly assetRepository: IFindAllAssetRepository) {}
  async execute(): Promise<FindAllAssetUseCaseResponseDTO[]> {
    const assets = await this.assetRepository.findAll();
    return assets.map((asset) => ({
      id: asset._id!,
      imageUrl: asset.imageUrl,
      name: asset.name,
      description: asset.description,
      model: asset.model,
      owner: asset.owner,
      status: asset.status,
      healthLevel: asset.healthLevel,
      unitId: asset.unitId,
    }));
  }
}
