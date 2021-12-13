import { ICreateCompanyRepository } from '../../repositories/company';
import { ICreateCompanyUseCase, CreateCompanyUseCase } from '@/core/usecases/company/create';
import {
  CreateCompanyUseCaseRequestDTO,
  CreateCompanyUseCaseResponseDTO,
} from '@/core/usecases/company/create/dto';
import { mock, MockProxy } from 'jest-mock-extended';
import { Company } from '@/core/entities/company.entity';

describe('CreateUseCase', () => {
  let mockAssetRepository: MockProxy<ICreateCompanyRepository>;
  let createUseCase: ICreateCompanyUseCase;

  beforeEach(() => {
    mockAssetRepository = mock<ICreateCompanyRepository>();
    createUseCase = new CreateCompanyUseCase(mockAssetRepository);
  });

  it('should be able to create a company', async () => {
    mockAssetRepository.create.mockResolvedValue(
      new Company('company name', '5f6d7c2f9e06c933d4a4b4c4d')
    );

    const createUseCaseRequestDTO: CreateCompanyUseCaseRequestDTO = {
      name: 'company name',
    };

    const createUseCaseResponseDTO: CreateCompanyUseCaseResponseDTO = await createUseCase.execute(
      createUseCaseRequestDTO
    );

    expect(createUseCaseResponseDTO).toEqual({
      id: '5f6d7c2f9e06c933d4a4b4c4d',
      name: 'company name',
    });
  });
});
