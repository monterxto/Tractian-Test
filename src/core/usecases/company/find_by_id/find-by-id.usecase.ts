import { IFindCompanyByIdRepository } from '@/core/repositories/company';
import {
  FindCompanyByIdUseCaseRequestDTO,
  FindCompanyByIdUseCaseResponseDTO,
  IFindCompanyByIdUseCase,
} from './';
import { NotFoundError } from '@/core/errors';
export class FindCompanyByIdUseCase implements IFindCompanyByIdUseCase {
  constructor(private readonly companyRepository: IFindCompanyByIdRepository) {}
  async execute({
    id,
  }: FindCompanyByIdUseCaseRequestDTO): Promise<FindCompanyByIdUseCaseResponseDTO | Error> {
    const company = await this.companyRepository.findById(id);
    if (!company) return new NotFoundError('Company not found');
    return {
      id: company._id!,
      name: company.name,
    };
  }
}
