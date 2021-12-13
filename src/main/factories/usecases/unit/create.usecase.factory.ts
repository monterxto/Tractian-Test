import { makeDbCreateUnit } from '@/main/factories/infra/repositories/mongodb';
import { ICreateUnitUseCase, CreateUnitUseCase } from '@/core/usecases/unit/create/';

export const makeCreateUnitUseCase = (): ICreateUnitUseCase => {
  return new CreateUnitUseCase(makeDbCreateUnit());
};
