import { AssetIdRequestDto, UpdateAssetUseCaseRequestDTO } from './dto';

export interface IUpdateAssetUseCase {
  execute(
    { id }: AssetIdRequestDto,
    updateDtoRequest: Partial<UpdateAssetUseCaseRequestDTO>
  ): Promise<void | Error>;
}
