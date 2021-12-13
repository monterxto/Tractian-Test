import { Controller } from '@/Application/protocols';
import { FindUserByCompanyIdController } from '@/Application/controllers/user';
import { makeFindUserByCompanyIdUseCase } from '@/main/factories/usecases/user';
import { makeFindUserByCompanyIdValidation } from '@/main/factories/application/validation/user';

export const makeFindUserByCompanyIdController = (): Controller => {
  const findUserByCompanyIdUseCase = makeFindUserByCompanyIdUseCase();
  const findUserByCompanyIdValidation = makeFindUserByCompanyIdValidation();
  return new FindUserByCompanyIdController(
    findUserByCompanyIdUseCase,
    findUserByCompanyIdValidation
  );
};
