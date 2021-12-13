import { FindAssetByIdUseCaseRequestDTO, FindAssetByIdUseCaseResponseDTO } from './dto';

export interface IFindAssetByIdUseCase {
  execute(id: FindAssetByIdUseCaseRequestDTO): Promise<FindAssetByIdUseCaseResponseDTO | Error>;
}
