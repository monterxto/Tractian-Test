import { makeDbFindAllCompany } from '@/main/factories/infra/repositories/mongodb';
import { IFindAllCompanyUseCase, FindAllCompanyUseCase } from '@/core/usecases/company/find_all';

export const makeFindAllCompanyUseCase = (): IFindAllCompanyUseCase => {
  return new FindAllCompanyUseCase(makeDbFindAllCompany());
};
