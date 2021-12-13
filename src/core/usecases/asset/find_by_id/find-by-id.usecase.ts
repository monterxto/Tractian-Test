import { IFindAssetByIdRepository } from '@/core/repositories/asset';
import {
  IFindAssetByIdUseCase,
  FindAssetByIdUseCaseRequestDTO,
  FindAssetByIdUseCaseResponseDTO,
} from './';
import { NotFoundError } from '@/core/errors';
export class FindAssetByIdUseCase implements IFindAssetByIdUseCase {
  constructor(private readonly assetRepository: IFindAssetByIdRepository) {}
  async execute({
    id,
  }: FindAssetByIdUseCaseRequestDTO): Promise<FindAssetByIdUseCaseResponseDTO | Error> {
    const asset = await this.assetRepository.findById(id);
    if (!asset) return new NotFoundError('Asset not found');
    return {
      id: asset._id!,
      imageUrl: asset.imageUrl,
      name: asset.name,
      description: asset.description,
      model: asset.model,
      owner: asset.owner,
      status: asset.status,
      healthLevel: asset.healthLevel,
      unitId: asset.unitId,
    };
  }
}
