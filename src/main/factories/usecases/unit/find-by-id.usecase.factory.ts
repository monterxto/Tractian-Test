import { makeDbFindUnitById } from '@/main/factories/infra/repositories/mongodb';
import { IFindUnitByIdUseCase, FindUnitByIdUseCase } from '@/core/usecases/unit/find_by_id';

export const makeFindUnitByIdUseCase = (): IFindUnitByIdUseCase => {
  return new FindUnitByIdUseCase(makeDbFindUnitById());
};
