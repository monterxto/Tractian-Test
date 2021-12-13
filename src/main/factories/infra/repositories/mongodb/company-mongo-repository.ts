import {
  ICreateCompanyRepository,
  IFindAllCompanyRepository,
  IFindCompanyByIdRepository,
  IUpdateCompanyRepository,
  IDeleteCompanyRepository,
} from '@/core/repositories/company';
import { CompanyMongoRepository } from '@/infra/repository/mongodb/company.repository.mongo';

export const makeDbCreateCompany = (): ICreateCompanyRepository => {
  return new CompanyMongoRepository();
};

export const makeDbFindAllCompany = (): IFindAllCompanyRepository => {
  return new CompanyMongoRepository();
};

export const makeDbFindCompanyById = (): IFindCompanyByIdRepository => {
  return new CompanyMongoRepository();
};

export const makeDbUpdateCompany = (): IUpdateCompanyRepository => {
  return new CompanyMongoRepository();
};

export const makeDbDeleteCompany = (): IDeleteCompanyRepository => {
  return new CompanyMongoRepository();
};
