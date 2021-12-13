import { IFindByUnitIdAssetRepository } from '@/core/repositories/asset';
import {
  FindAssetByUnitIdUseCaseRequestDTO,
  FindAssetByUnitIdUseCaseResponseDTO,
  IFindAssetByUnitIdUseCase,
} from './';
export class FindAssetByUnitIdUseCase implements IFindAssetByUnitIdUseCase {
  constructor(private readonly assetRepository: IFindByUnitIdAssetRepository) {}
  async execute({
    unitId,
  }: FindAssetByUnitIdUseCaseRequestDTO): Promise<FindAssetByUnitIdUseCaseResponseDTO[]> {
    const assets = await this.assetRepository.findByUnitId(unitId);
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
