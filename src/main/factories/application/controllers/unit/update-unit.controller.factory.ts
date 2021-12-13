import { Controller } from '@/Application/protocols';
import { UpdateUnitController } from '@/Application/controllers/unit';
import { makeUpdateUnitUseCase } from '@/main/factories/usecases/unit';
import { makeUpdateUnitValidation } from '@/main/factories/application/validation/unit';

export const makeUpdateUnitController = (): Controller => {
  const updateUnitUseCase = makeUpdateUnitUseCase();
  const updateUnitValidation = makeUpdateUnitValidation();
  return new UpdateUnitController(updateUnitUseCase, updateUnitValidation);
};
