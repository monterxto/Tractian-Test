import {
  IFindCompanyByIdUseCase,
  FindCompanyByIdUseCase,
} from '@/core/usecases/company/find_by_id';
import { IFindCompanyByIdRepository } from '@/core/repositories/company';
import {
  FindCompanyByIdUseCaseRequestDTO,
  FindCompanyByIdUseCaseResponseDTO,
} from '@/core/usecases/company/find_by_id/dto';
import { mock, MockProxy } from 'jest-mock-extended';
import { Company } from '@/core/entities/company.entity';

describe('FindByIdUseCase', () => {
  let findByIdUseCase: IFindCompanyByIdUseCase;
  let mockCompanyRepository: MockProxy<IFindCompanyByIdRepository>;

  beforeAll(() => {
    mockCompanyRepository = mock<IFindCompanyByIdRepository>();
    findByIdUseCase = new FindCompanyByIdUseCase(mockCompanyRepository);
  });

  it('should return company when findById is called', async () => {
    const resultRepository = new Company('company name', '5f6d7c2f9e06c933d4a4b4c4d');

    mockCompanyRepository.findById.mockResolvedValue(resultRepository);
    const request: FindCompanyByIdUseCaseRequestDTO = {
      id: '5f6d7c2f9e06c933d4a4b4c4d',
    };

    const response: FindCompanyByIdUseCaseResponseDTO = {
      id: '5f6d7c2f9e06c933d4a4b4c4d',
      name: 'company name',
    };

    expect(await findByIdUseCase.execute(request)).toEqual(response);
  });
});
