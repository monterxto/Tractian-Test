import { makeDbFindAllUser } from '@/main/factories/infra/repositories/mongodb';
import { IFindAllUserUseCase, FindAllUserUseCase } from '@/core/usecases/user/find_all';

export const makeFindAllUserUseCase = (): IFindAllUserUseCase => {
  return new FindAllUserUseCase(makeDbFindAllUser());
};
