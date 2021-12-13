import { IFindCompanyByIdRepository, IUpdateCompanyRepository } from '@/core/repositories/company';
import { CompanyIdRequestDto, UpdateCompanyUseCaseRequestDTO, IUpdateCompanyUseCase } from './';
import { NotFoundError } from '@/core/errors/not-found-error';

export class UpdateCompanyUseCase implements IUpdateCompanyUseCase {
  constructor(
    private readonly updateRepository: IUpdateCompanyRepository,
    private readonly findByIdRepository: IFindCompanyByIdRepository
  ) {}

  async execute(
    { id }: CompanyIdRequestDto,
    updateDtoRequest: Partial<UpdateCompanyUseCaseRequestDTO>
  ): Promise<void | Error> {
    const companyExists = await this.findByIdRepository.findById(id);
    if (!companyExists) return new NotFoundError('Company not found');
    await this.updateRepository.update(id, updateDtoRequest);
  }
}
