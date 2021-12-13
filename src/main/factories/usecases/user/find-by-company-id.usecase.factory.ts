import { makeDbFindUserByCompanyId } from '@/main/factories/infra/repositories/mongodb';
import {
  IFindUserByCompanyIdUseCase,
  FindUserByCompanyIdUseCase,
} from '@/core/usecases/user/find_by_company_id';

export const makeFindUserByCompanyIdUseCase = (): IFindUserByCompanyIdUseCase => {
  return new FindUserByCompanyIdUseCase(makeDbFindUserByCompanyId());
};
