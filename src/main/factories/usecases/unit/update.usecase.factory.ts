import { makeDbUpdateUnit, makeDbFindUnitById } from '@/main/factories/infra/repositories/mongodb';
import { IUpdateUnitUseCase, UpdateUnitUseCase } from '@/core/usecases/unit/update';

export const makeUpdateUnitUseCase = (): IUpdateUnitUseCase => {
  return new UpdateUnitUseCase(makeDbUpdateUnit(), makeDbFindUnitById());
};
