import { Controller } from '@/Application/protocols';
import { DeleteUserController } from '@/Application/controllers/user';
import { makeDeleteUserUseCase } from '@/main/factories/usecases/user';

export const makeDeleteUserController = (): Controller => {
  const deleteUserUseCase = makeDeleteUserUseCase();
  return new DeleteUserController(deleteUserUseCase);
};
