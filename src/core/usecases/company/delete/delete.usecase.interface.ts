import { CompanyIdRequestDto } from './';

export interface IDeleteCompanyUseCase {
  execute({ id }: CompanyIdRequestDto): Promise<void>;
}
