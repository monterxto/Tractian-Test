import { Controller } from '@/Application/protocols';
import { UpdateUserController } from '@/Application/controllers/user';
import { makeUpdateUserUseCase } from '@/main/factories/usecases/user';
import { makeUpdateUserValidation } from '@/main/factories/application/validation/user';

export const makeUpdateUserController = (): Controller => {
  const updateUserUseCase = makeUpdateUserUseCase();
  const updateUserValidation = makeUpdateUserValidation();
  return new UpdateUserController(updateUserUseCase, updateUserValidation);
};
