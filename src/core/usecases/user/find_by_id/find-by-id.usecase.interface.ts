import { FindUserByIdUseCaseRequestDTO, FindUserByIdUseCaseResponseDTO } from './';

export interface IFindUserByIdUseCase {
  execute({ id }: FindUserByIdUseCaseRequestDTO): Promise<FindUserByIdUseCaseResponseDTO | Error>;
}
