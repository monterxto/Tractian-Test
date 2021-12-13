import {
  FindUnitByIdWithAssetsUseCaseRequestDTO,
  FindUnitByIdWithAssetsUseCaseResponseDTO,
} from './';

export interface IFindUnitByIdWithAssetsUseCase {
  execute({
    id,
  }: FindUnitByIdWithAssetsUseCaseRequestDTO): Promise<FindUnitByIdWithAssetsUseCaseResponseDTO | Error>;
}
