import { IFindAllCompanyRepository } from '../../../repositories/company';
import { IFindAllCompanyUseCase } from './find-all.usecase.interface';
import { FindAllCompanyUseCaseResponseDTO } from './dto';

export class FindAllCompanyUseCase implements IFindAllCompanyUseCase {
  constructor(private readonly companyRepository: IFindAllCompanyRepository) {}
  async execute(): Promise<FindAllCompanyUseCaseResponseDTO[]> {
    const companies = await this.companyRepository.findAll();
    return companies.map((company) => ({
      id: company._id!,
      name: company.name,
    }));
  }
}
