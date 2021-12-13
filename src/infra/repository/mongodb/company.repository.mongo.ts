import {
  ICreateCompanyRepository,
  IFindAllCompanyRepository,
  IFindCompanyByIdRepository,
  IUpdateCompanyRepository,
  IDeleteCompanyRepository,
} from '@/core/repositories/company';
import { CompanyModel, CompanyDocument } from '@/infra/entities/mongodb';
import { Company } from '@/core/entities/company.entity';
import { CompanyAdapter } from '@/adapter/infra';
import { UpdateCompanyUseCaseRequestDTO } from '@/core/usecases/company/update';

export class CompanyMongoRepository
  implements
    ICreateCompanyRepository,
    IFindAllCompanyRepository,
    IFindCompanyByIdRepository,
    IUpdateCompanyRepository,
    IDeleteCompanyRepository
{
  async create(company: Company): Promise<Company> {
    try {
      const companyCreated: CompanyDocument = await CompanyModel.create(company);
      return CompanyAdapter.create(companyCreated);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll(): Promise<Company[]> {
    try {
      const companies: CompanyDocument[] = await CompanyModel.find();
      return CompanyAdapter.createList(companies);
    } catch (error) {
      console.log(error);
    }
  }

  async findById(id: string): Promise<Company> {
    try {
      const company: CompanyDocument = await CompanyModel.findById(id);
      if (!company) return null;
      return CompanyAdapter.create(company);
    } catch (error) {
      console.log(error);
    }
  }

  async update(
    id: string,
    updateDtoRequest: Partial<UpdateCompanyUseCaseRequestDTO>
  ): Promise<void> {
    try {
      await CompanyModel.updateOne({ _id: id }, updateDtoRequest);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await CompanyModel.deleteOne({ _id: id });
    } catch (error) {
      console.log(error);
    }
  }
}
