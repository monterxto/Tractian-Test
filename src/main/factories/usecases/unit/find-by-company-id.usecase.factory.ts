import { makeDbFindUnitByCompanyId } from '@/main/factories/infra/repositories/mongodb';
import {
  IFindUnitByCompanyIdUseCase,
  FindUnitByCompanyIdUseCase,
} from '@/core/usecases/unit/find_by_company_id';

export const makeFindUnitByCompanyIdUseCase = (): IFindUnitByCompanyIdUseCase => {
  return new FindUnitByCompanyIdUseCase(makeDbFindUnitByCompanyId());
};
