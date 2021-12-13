import { makeDbDeleteUnit, makeDbFindUnitById } from '@/main/factories/infra/repositories/mongodb';
import { IDeleteUnitUseCase, DeleteUnitUseCase } from '@/core/usecases/unit/delete';

export const makeDeleteUnitUseCase = (): IDeleteUnitUseCase => {
  return new DeleteUnitUseCase(makeDbDeleteUnit(), makeDbFindUnitById());
};
