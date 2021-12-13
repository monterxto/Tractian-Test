import { UpdateCompanyUseCase, IUpdateCompanyUseCase } from '@/core/usecases/company/update';
import {
  UpdateCompanyUseCaseRequestDTO,
  CompanyIdRequestDto,
} from '@/core/usecases/company/update/dto';
import { IUpdateCompanyRepository, IFindCompanyByIdRepository } from '@/core/repositories/company';
import { mock, MockProxy } from 'jest-mock-extended';
import { Company } from '@/core/entities/company.entity';

describe('UpdateUseCase', () => {
  let mockUpdateCompanyRepository: MockProxy<IUpdateCompanyRepository>;
  let mockFindCompanyByIdRepository: MockProxy<IFindCompanyByIdRepository>;

  let updateUseCase: IUpdateCompanyUseCase;

  beforeEach(() => {
    mockUpdateCompanyRepository = mock<IUpdateCompanyRepository>();
    mockFindCompanyByIdRepository = mock<IFindCompanyByIdRepository>();
    updateUseCase = new UpdateCompanyUseCase(
      mockUpdateCompanyRepository,
      mockFindCompanyByIdRepository
    );
  });

  it('should be able to update an company', async () => {
    const updateUseCaseRequestDTO: Partial<UpdateCompanyUseCaseRequestDTO> = {
      name: 'new name',
    };

    const resultRepository = new Company('company name', '5f6d7c2f9e06c933d4a4b4c4d');

    mockFindCompanyByIdRepository.findById.mockResolvedValue(resultRepository);

    await updateUseCase.execute({ id: '5f6d7c2f9e06c933d4a4b4c4b' }, updateUseCaseRequestDTO);

    expect(mockUpdateCompanyRepository.update).toHaveBeenCalled();
  });
});
