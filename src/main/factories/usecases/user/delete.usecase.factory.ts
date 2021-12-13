import { makeDbDeleteUser, makeDbFindUserById } from '@/main/factories/infra/repositories/mongodb';
import { IDeleteUserUseCase, DeleteUserUseCase } from '@/core/usecases/user/delete';

export const makeDeleteUserUseCase = (): IDeleteUserUseCase => {
  return new DeleteUserUseCase(makeDbDeleteUser(), makeDbFindUserById());
};
