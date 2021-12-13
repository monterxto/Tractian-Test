import { Controller } from '@/Application/protocols';
import { FindUserByIdController } from '@/Application/controllers/user';
import { makeFindUserByIdUseCase } from '@/main/factories/usecases/user';

export const makeFindUserByIdController = (): Controller => {
  const findUserByIdUseCase = makeFindUserByIdUseCase();
  return new FindUserByIdController(findUserByIdUseCase);
};
