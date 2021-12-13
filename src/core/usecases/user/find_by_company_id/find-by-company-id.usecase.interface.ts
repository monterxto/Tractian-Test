import { FindUserByCompanyIdUseCaseRequestDTO, FindUserByCompanyIdUseCaseResponseDTO } from './';

export interface IFindUserByCompanyIdUseCase {
  execute({
    companyId,
  }: FindUserByCompanyIdUseCaseRequestDTO): Promise<FindUserByCompanyIdUseCaseResponseDTO[]>;
}
