import { Company } from '@/core/entities/company.entity';

export interface IFindAllCompanyRepository {
  findAll(): Promise<Company[]>;
}
