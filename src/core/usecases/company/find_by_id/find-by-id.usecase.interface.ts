import { FindCompanyByIdUseCaseRequestDTO, FindCompanyByIdUseCaseResponseDTO } from './dto';

export interface IFindCompanyByIdUseCase {
  execute({
    id,
  }: FindCompanyByIdUseCaseRequestDTO): Promise<FindCompanyByIdUseCaseResponseDTO | Error>;
}
