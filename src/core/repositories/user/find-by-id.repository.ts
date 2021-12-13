import { User } from '@/core/entities/user.entity';

export interface IFindUserByIdRepository {
  findById(id: string): Promise<User>;
}
