import { Controller } from '@/Application/protocols';
import { FindAllCompanyController } from '@/Application/controllers/company';
import { makeFindAllCompanyUseCase } from '@/main/factories/usecases/company';

export const makeFindAllCompanyController = (): Controller => {
  const findAllCompanyUseCase = makeFindAllCompanyUseCase();
  return new FindAllCompanyController(findAllCompanyUseCase);
};
