import { makeDbFindCompanyById } from '@/main/factories/infra/repositories/mongodb';
import {
  IFindCompanyByIdUseCase,
  FindCompanyByIdUseCase,
} from '@/core/usecases/company/find_by_id';

export const makeFindCompanyByIdUseCase = (): IFindCompanyByIdUseCase => {
  return new FindCompanyByIdUseCase(makeDbFindCompanyById());
};
