import { makeDbFindAllUnit } from '@/main/factories/infra/repositories/mongodb';
import { IFindAllUnitUseCase, FindAllUnitUseCase } from '@/core/usecases/unit/find_all';

export const makeFindAllUnitUseCase = (): IFindAllUnitUseCase => {
  return new FindAllUnitUseCase(makeDbFindAllUnit());
};
