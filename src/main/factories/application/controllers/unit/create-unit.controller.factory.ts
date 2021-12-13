import { Controller } from '@/Application/protocols';
import { CreateUnitController } from '@/Application/controllers/unit';
import { makeCreateUnitUseCase } from '@/main/factories/usecases/unit';
import { makeCreateUnitValidation } from '@/main/factories/application/validation/unit';

export const makeCreateUnitController = (): Controller => {
  const createUnitUseCase = makeCreateUnitUseCase();
  const createUnitValidation = makeCreateUnitValidation();
  return new CreateUnitController(createUnitUseCase, createUnitValidation);
};
