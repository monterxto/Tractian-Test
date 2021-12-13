import {
  makeDbDeleteCompany,
  makeDbFindCompanyById,
} from '@/main/factories/infra/repositories/mongodb';
import { IDeleteCompanyUseCase, DeleteCompanyUseCase } from '@/core/usecases/company/delete';

export const makeDeleteCompanyUseCase = (): IDeleteCompanyUseCase => {
  return new DeleteCompanyUseCase(makeDbDeleteCompany(), makeDbFindCompanyById());
};
