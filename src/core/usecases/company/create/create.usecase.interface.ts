import { CreateCompanyUseCaseRequestDTO, CreateCompanyUseCaseResponseDTO } from './';

export interface ICreateCompanyUseCase {
  execute(
    createDtoRequest: CreateCompanyUseCaseRequestDTO
  ): Promise<CreateCompanyUseCaseResponseDTO>;
}
