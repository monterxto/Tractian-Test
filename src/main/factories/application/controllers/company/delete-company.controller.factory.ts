import { Controller } from '@/Application/protocols';
import { DeleteCompanyController } from '@/Application/controllers/company';
import { makeDeleteCompanyUseCase } from '@/main/factories/usecases/company';

export const makeDeleteCompanyController = (): Controller => {
  const deleteCompanyUseCase = makeDeleteCompanyUseCase();
  return new DeleteCompanyController(deleteCompanyUseCase);
};
