import { User } from '@/core/entities/user.entity';

export interface IFindByCompanyIdUserRepository {
  findByCompanyId(companyId: string): Promise<User[]>;
}
