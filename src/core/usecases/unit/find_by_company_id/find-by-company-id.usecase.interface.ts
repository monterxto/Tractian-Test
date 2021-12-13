import { FindUnitByCompanyIdUseCaseRequestDTO, FindUnitByCompanyIdUseCaseResponseDTO } from './';

export interface IFindUnitByCompanyIdUseCase {
  execute({
    companyId,
  }: FindUnitByCompanyIdUseCaseRequestDTO): Promise<FindUnitByCompanyIdUseCaseResponseDTO[]>;
}
