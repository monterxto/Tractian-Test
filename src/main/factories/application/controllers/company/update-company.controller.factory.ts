import { Controller } from '@/Application/protocols';
import { UpdateCompanyController } from '@/Application/controllers/company';
import { makeUpdateCompanyUseCase } from '@/main/factories/usecases/company';
import { makeUpdateCompanyValidation } from '@/main/factories/application/validation/company';

export const makeUpdateCompanyController = (): Controller => {
  const updateCompanyUseCase = makeUpdateCompanyUseCase();
  const updateCompanyValidation = makeUpdateCompanyValidation();
  return new UpdateCompanyController(updateCompanyUseCase, updateCompanyValidation);
};
