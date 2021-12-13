import { Controller } from '@/Application/protocols';
import { FindCompanyByIdController } from '@/Application/controllers/company';
import { makeFindCompanyByIdUseCase } from '@/main/factories/usecases/company';

export const makeFindCompanyByIdController = (): Controller => {
  const findCompanyByIdUseCase = makeFindCompanyByIdUseCase();
  return new FindCompanyByIdController(findCompanyByIdUseCase);
};
