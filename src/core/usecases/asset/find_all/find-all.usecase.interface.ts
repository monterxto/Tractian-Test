import { FindAllAssetUseCaseResponseDTO } from './dto';

export interface IFindAllAssetUseCase {
  execute(): Promise<FindAllAssetUseCaseResponseDTO[]>;
}
