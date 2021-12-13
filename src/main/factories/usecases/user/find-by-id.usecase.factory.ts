import { makeDbFindUserById } from '@/main/factories/infra/repositories/mongodb';
import { IFindUserByIdUseCase, FindUserByIdUseCase } from '@/core/usecases/user/find_by_id';

export const makeFindUserByIdUseCase = (): IFindUserByIdUseCase => {
  return new FindUserByIdUseCase(makeDbFindUserById());
};
