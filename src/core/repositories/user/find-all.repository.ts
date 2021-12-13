import { User } from '@/core/entities/user.entity';

export interface IFindAllUserRepository {
  findAll(): Promise<User[]>;
}
