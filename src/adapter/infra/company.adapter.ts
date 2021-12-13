import { Company } from '@/core/entities/company.entity';
import { CompanyDocument } from '@/infra/entities/mongodb';

export class CompanyAdapter {
  static create(company: CompanyDocument): Company {
    return new Company(company.name, company._id);
  }

  static createList(companies: CompanyDocument[]): Company[] {
    return companies.map((company) => new Company(company.name, company._id));
  }
}
