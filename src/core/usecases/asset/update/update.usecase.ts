import { Asset } from '@/core/entities/asset.entity';
import { IFindAssetByIdRepository, IUpdateAssetRepository } from '@/core/repositories/asset';
import { AssetIdRequestDto, UpdateAssetUseCaseRequestDTO, IUpdateAssetUseCase } from './';
import { InvalidParamError } from '@/core/errors/invalid-param-error';
import { NotFoundError } from '@/core/errors/not-found-error';

export class UpdateAssetUseCase implements IUpdateAssetUseCase {
  constructor(
    private readonly updateRepository: IUpdateAssetRepository,
    private readonly findByIdRepository: IFindAssetByIdRepository
  ) {}

  async execute(
    { id }: AssetIdRequestDto,
    updateDtoRequest: Partial<UpdateAssetUseCaseRequestDTO>
  ): Promise<void | Error> {
    const assetExists = await this.findByIdRepository.findById(id);
    if (!assetExists) return new NotFoundError('Asset not found');
    if (!Asset.statusIsValid(updateDtoRequest.status))
      return new InvalidParamError('Invalid status');
    await this.updateRepository.update(id, updateDtoRequest);
  }
}
