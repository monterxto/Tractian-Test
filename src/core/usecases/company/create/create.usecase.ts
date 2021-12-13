import { Company } from '../../../entities/company.entity';
import { ICreateCompanyRepository } from '../../../repositories/company';
import {
  CreateCompanyUseCaseRequestDTO,
  CreateCompanyUseCaseResponseDTO,
  ICreateCompanyUseCase,
} from './';

export class CreateCompanyUseCase implements ICreateCompanyUseCase {
  constructor(private readonly companyRepository: ICreateCompanyRepository) {}

  async execute(
    createDtoRequest: CreateCompanyUseCaseRequestDTO
  ): Promise<CreateCompanyUseCaseResponseDTO> {
    const companyEntity = new Company(createDtoRequest.name);
    const companyCreated = await this.companyRepository.create(companyEntity);
    return {
      id: companyCreated._id!,
      name: companyCreated.name,
    };
  }
}
