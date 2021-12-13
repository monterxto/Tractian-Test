import { User } from '@/core/entities/user.entity';

export class UserAdapter {
  static create(user: any): User {
    return new User(user.name, user.companyId, user.id);
  }

  static createList(users: any[]): User[] {
    return users.map((user) => new User(user.name, user.companyId, user.id));
  }
}
