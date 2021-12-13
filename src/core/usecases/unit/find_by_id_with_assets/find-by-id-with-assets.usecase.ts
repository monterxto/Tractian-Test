import { IFindUnitByIdRepository } from '@/core/repositories/unit';
import {
  FindUnitByIdWithAssetsUseCaseRequestDTO,
  FindUnitByIdWithAssetsUseCaseResponseDTO,
  IFindUnitByIdWithAssetsUseCase,
} from './';
import { NotFoundError } from '@/core/errors';
import { IFindByUnitIdAssetRepository } from '@/core/repositories/asset';
export class FindUnitByIdWithAssetsUseCase implements IFindUnitByIdWithAssetsUseCase {
  constructor(
    private readonly unitRepository: IFindUnitByIdRepository,
    private readonly assetRepository: IFindByUnitIdAssetRepository
  ) {}
  async execute({
    id,
  }: FindUnitByIdWithAssetsUseCaseRequestDTO): Promise<FindUnitByIdWithAssetsUseCaseResponseDTO | Error> {
    const unit = await this.unitRepository.findById(id);
    if (!unit) return new NotFoundError('Unit not found');
    const assets = await this.assetRepository.findByUnitId(id);
    return {
      id: unit._id,
      name: unit.name,
      companyId: unit.companyId,
      address: unit.address,
      assets: assets.map((asset) => ({
        id: asset._id,
        imageUrl: asset.imageUrl,
        name: asset.name,
        description: asset.description,
        model: asset.model,
        owner: asset.owner,
        status: asset.status,
        healthLevel: asset.healthLevel,
        unitId: asset.unitId,
      })),
    };
  }
}
