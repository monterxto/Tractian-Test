import { makeDbUpdateUser, makeDbFindUserById } from '@/main/factories/infra/repositories/mongodb';
import { IUpdateUserUseCase, UpdateUserUseCase } from '@/core/usecases/user/update';

export const makeUpdateUserUseCase = (): IUpdateUserUseCase => {
  return new UpdateUserUseCase(makeDbUpdateUser(), makeDbFindUserById());
};
