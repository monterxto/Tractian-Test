import { User } from '@/core/entities/user.entity';

export interface ICreateUserRepository {
  create(user: User): Promise<User>;
}
