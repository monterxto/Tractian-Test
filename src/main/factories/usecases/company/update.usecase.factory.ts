import {
  makeDbUpdateCompany,
  makeDbFindCompanyById,
} from '@/main/factories/infra/repositories/mongodb';
import { IUpdateCompanyUseCase, UpdateCompanyUseCase } from '@/core/usecases/company/update';

export const makeUpdateCompanyUseCase = (): IUpdateCompanyUseCase => {
  return new UpdateCompanyUseCase(makeDbUpdateCompany(), makeDbFindCompanyById());
};
