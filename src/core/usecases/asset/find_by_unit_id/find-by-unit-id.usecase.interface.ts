import { FindAssetByUnitIdUseCaseRequestDTO, FindAssetByUnitIdUseCaseResponseDTO } from './';

export interface IFindAssetByUnitIdUseCase {
  execute({
    unitId,
  }: FindAssetByUnitIdUseCaseRequestDTO): Promise<FindAssetByUnitIdUseCaseResponseDTO[]>;
}
