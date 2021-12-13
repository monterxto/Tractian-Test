import { FindUnitByIdUseCaseRequestDTO, FindUnitByIdUseCaseResponseDTO } from './';

export interface IFindUnitByIdUseCase {
  execute({ id }: FindUnitByIdUseCaseRequestDTO): Promise<FindUnitByIdUseCaseResponseDTO | Error>;
}
