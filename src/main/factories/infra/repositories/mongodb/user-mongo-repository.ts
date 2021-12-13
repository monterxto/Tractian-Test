import {
  ICreateUserRepository,
  IFindAllUserRepository,
  IFindUserByIdRepository,
  IUpdateUserRepository,
  IDeleteUserRepository,
  IFindByCompanyIdUserRepository,
} from '@/core/repositories/user';
import { UserMongoRepository } from '@/infra/repository/mongodb';

export const makeDbCreateUser = (): ICreateUserRepository => {
  return new UserMongoRepository();
};

export const makeDbFindAllUser = (): IFindAllUserRepository => {
  return new UserMongoRepository();
};

export const makeDbFindUserById = (): IFindUserByIdRepository => {
  return new UserMongoRepository();
};

export const makeDbFindUserByCompanyId = (): IFindByCompanyIdUserRepository => {
  return new UserMongoRepository();
};

export const makeDbUpdateUser = (): IUpdateUserRepository => {
  return new UserMongoRepository();
};

export const makeDbDeleteUser = (): IDeleteUserRepository => {
  return new UserMongoRepository();
};
