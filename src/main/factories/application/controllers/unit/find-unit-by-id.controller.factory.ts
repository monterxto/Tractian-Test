import { Controller } from '@/Application/protocols';
import { FindUnitByIdController } from '@/Application/controllers/unit';
import { makeFindUnitByIdUseCase } from '@/main/factories/usecases/unit';
import { makeFindUnitByIdValidation } from '@/main/factories/application/validation/unit';

export const makeFindUnitByIdController = (): Controller => {
  const findUnitByIdUseCase = makeFindUnitByIdUseCase();
  const findUnitByCompanyIdValidation = makeFindUnitByIdValidation();
  return new FindUnitByIdController(findUnitByIdUseCase, findUnitByCompanyIdValidation);
};
