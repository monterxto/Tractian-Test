import { IFindCompanyByIdRepository, IDeleteCompanyRepository } from '@/core/repositories/company';
import { IDeleteCompanyUseCase, CompanyIdRequestDto } from './';

export class DeleteCompanyUseCase implements IDeleteCompanyUseCase {
  constructor(
    private readonly deleteRepository: IDeleteCompanyRepository,
    private readonly findByIdRepository: IFindCompanyByIdRepository
  ) {}

  async execute({ id }: CompanyIdRequestDto): Promise<void> {
    const companyExists = await this.findByIdRepository.findById(id);
    if (!companyExists) return;
    await this.deleteRepository.delete(id);
  }
}
