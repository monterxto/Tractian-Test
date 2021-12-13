import { CreateUserUseCaseRequestDTO, CreateUserUseCaseResponseDTO } from './';

export interface ICreateUserUseCase {
  execute(createDtoRequest: CreateUserUseCaseRequestDTO): Promise<CreateUserUseCaseResponseDTO>;
}
