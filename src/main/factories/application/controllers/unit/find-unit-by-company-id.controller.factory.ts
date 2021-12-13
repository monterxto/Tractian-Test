import { Controller } from '@/Application/protocols';
import { FindUnitByCompanyIdController } from '@/Application/controllers/unit';
import { makeFindUnitByCompanyIdUseCase } from '@/main/factories/usecases/unit';
import { makeFindUnitByCompanyIdValidation } from '@/main/factories/application/validation/unit';

export const makeFindUnitByCompanyIdController = (): Controller => {
  const findUnitByCompanyIdUseCase = makeFindUnitByCompanyIdUseCase();
  const findUnitByCompanyIdValidation = makeFindUnitByCompanyIdValidation();
  return new FindUnitByCompanyIdController(
    findUnitByCompanyIdUseCase,
    findUnitByCompanyIdValidation
  );
};
