import { Controller } from '@/Application/protocols';
import { CreateUserController } from '@/Application/controllers/user';
import { makeCreateUserUseCase } from '@/main/factories/usecases/user';
import { makeCreateUserValidation } from '@/main/factories/application/validation/user';

export const makeCreateUserController = (): Controller => {
  const createUserUseCase = makeCreateUserUseCase();
  const createUserValidation = makeCreateUserValidation();
  return new CreateUserController(createUserUseCase, createUserValidation);
};
