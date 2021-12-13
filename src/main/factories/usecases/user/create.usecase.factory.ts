import { makeDbCreateUser } from '@/main/factories/infra/repositories/mongodb';
import { ICreateUserUseCase, CreateUserUseCase } from '@/core/usecases/user/create/';

export const makeCreateUserUseCase = (): ICreateUserUseCase => {
  return new CreateUserUseCase(makeDbCreateUser());
};
