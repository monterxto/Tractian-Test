import { IFindAssetByIdRepository, IDeleteAssetRepository } from '@/core/repositories/asset';
import { IDeleteAssetUseCase, AssetIdRequestDto } from './';

export class DeleteAssetUseCase implements IDeleteAssetUseCase {
  constructor(
    private readonly deleteRepository: IDeleteAssetRepository,
    private readonly findByIdRepository: IFindAssetByIdRepository
  ) {}

  async execute({ id }: AssetIdRequestDto): Promise<void> {
    const assetExists = await this.findByIdRepository.findById(id);
    if (!assetExists) return;
    await this.deleteRepository.delete(id);
  }
}
