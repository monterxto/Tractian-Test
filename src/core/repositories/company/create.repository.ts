import { Company } from '@/core/entities/company.entity';

export interface ICreateCompanyRepository {
  create(company: Company): Promise<Company>;
}
