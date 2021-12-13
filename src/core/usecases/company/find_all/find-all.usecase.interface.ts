import { FindAllCompanyUseCaseResponseDTO } from './dto';

export interface IFindAllCompanyUseCase {
  execute(): Promise<FindAllCompanyUseCaseResponseDTO[]>;
}
