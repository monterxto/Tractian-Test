import {
  ICreateAssetUseCase,
  CreateAssetUseCaseRequestDTO,
  CreateAssetUseCaseResponseDTO,
} from '@/core/usecases/asset/create';
import { Asset } from '@/core/entities/asset.entity';
import { ICreateAssetRepository } from '@/core/repositories/asset';

export class CreateAssetUseCase implements ICreateAssetUseCase {
  constructor(private readonly assetRepository: ICreateAssetRepository) {}

  async execute(
    createDtoRequest: CreateAssetUseCaseRequestDTO
  ): Promise<CreateAssetUseCaseResponseDTO> {
    const assetEntity = new Asset(
      createDtoRequest.imageUrl,
      createDtoRequest.name,
      createDtoRequest.description,
      createDtoRequest.model,
      createDtoRequest.owner,
      createDtoRequest.status,
      createDtoRequest.unitId
    );
    const assetCreated = await this.assetRepository.create(assetEntity);
    return {
      id: assetCreated._id!,
      imageUrl: assetCreated.imageUrl,
      name: assetCreated.name,
      description: assetCreated.description,
      model: assetCreated.model,
      owner: assetCreated.owner,
      status: assetCreated.status,
      healthLevel: assetCreated.healthLevel,
      unitId: assetCreated.unitId,
    };
  }
}
