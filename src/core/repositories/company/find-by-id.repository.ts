import { Company } from '@/core/entities/company.entity';

export interface IFindCompanyByIdRepository {
  findById(id: string): Promise<Company>;
}
