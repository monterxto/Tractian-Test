import { Controller } from '@/Application/protocols';
import { CreateCompanyController } from '@/Application/controllers/company';
import { makeCreateCompanyUseCase } from '@/main/factories/usecases/company';
import { makeCreateCompanyValidation } from '@/main/factories/application/validation/company';

export const makeCreateCompanyController = (): Controller => {
  const createCompanyUseCase = makeCreateCompanyUseCase();
  const createCompanyValidation = makeCreateCompanyValidation();
  return new CreateCompanyController(createCompanyUseCase, createCompanyValidation);
};
