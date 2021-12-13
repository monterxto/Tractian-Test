import { makeDbCreateCompany } from '@/main/factories/infra/repositories/mongodb';
import { ICreateCompanyUseCase, CreateCompanyUseCase } from '@/core/usecases/company/create/';

export const makeCreateCompanyUseCase = (): ICreateCompanyUseCase => {
  return new CreateCompanyUseCase(makeDbCreateCompany());
};
