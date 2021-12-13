import { FindAllUserUseCaseResponseDTO } from './';

export interface IFindAllUserUseCase {
  execute(): Promise<FindAllUserUseCaseResponseDTO[]>;
}
