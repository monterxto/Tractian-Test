import { Controller } from '@/Application/protocols';
import { FindAllUserController } from '@/Application/controllers/user';
import { makeFindAllUserUseCase } from '@/main/factories/usecases/user';

export const makeFindAllUserController = (): Controller => {
  const findAllUserUseCase = makeFindAllUserUseCase();
  return new FindAllUserController(findAllUserUseCase);
};
