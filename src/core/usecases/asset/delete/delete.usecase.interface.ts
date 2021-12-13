import { AssetIdRequestDto } from './dto';

export interface IDeleteAssetUseCase {
  execute({ id }: AssetIdRequestDto): Promise<void>;
}
