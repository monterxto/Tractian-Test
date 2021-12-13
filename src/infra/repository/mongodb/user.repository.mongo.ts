import {
  ICreateUserRepository,
  IFindAllUserRepository,
  IFindUserByIdRepository,
  IUpdateUserRepository,
  IDeleteUserRepository,
  IFindByCompanyIdUserRepository,
} from '@/core/repositories/user';
import { UserModel, UserDocument } from '@/infra/entities/mongodb';
import { User } from '@/core/entities/user.entity';
import { UserAdapter } from '@/adapter/infra';
import { UpdateUserUseCaseRequestDTO } from '@/core/usecases/user/update';

export class UserMongoRepository
  implements
    ICreateUserRepository,
    IFindAllUserRepository,
    IFindUserByIdRepository,
    IUpdateUserRepository,
    IDeleteUserRepository,
    IFindByCompanyIdUserRepository
{
  async create(user: User): Promise<User> {
    try {
      const userCreated: UserDocument = await UserModel.create(user);
      return UserAdapter.create(userCreated);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll(): Promise<User[]> {
    try {
      const users: UserDocument[] = await UserModel.find();
      return UserAdapter.createList(users);
    } catch (error) {
      console.log(error);
    }
  }

  async findById(id: string): Promise<User> {
    try {
      const user: UserDocument = await UserModel.findById(id);
      if (!user) return null;
      return UserAdapter.create(user);
    } catch (error) {
      console.log(error);
    }
  }

  async findByCompanyId(companyId: string): Promise<User[]> {
    try {
      const users: UserDocument[] = await UserModel.find({ companyId });
      return UserAdapter.createList(users);
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: string, updateDtoRequest: Partial<UpdateUserUseCaseRequestDTO>): Promise<void> {
    try {
      await UserModel.updateOne({ _id: id }, updateDtoRequest);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await UserModel.deleteOne({ _id: id });
    } catch (error) {
      console.log(error);
    }
  }
}
