import { FindAllUnitUseCaseResponseDTO } from './';

export interface IFindAllUnitUseCase {
  execute(): Promise<FindAllUnitUseCaseResponseDTO[]>;
}
