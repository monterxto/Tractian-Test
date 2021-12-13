import { DeleteCompanyUseCase, IDeleteCompanyUseCase } from '@/core/usecases/company/delete';
import { IDeleteCompanyRepository, IFindCompanyByIdRepository } from '@/core/repositories/company';
import { mock, MockProxy } from 'jest-mock-extended';
import { Company } from '@/core/entities/company.entity';

describe('DeleteUseCase', () => {
  let mockDeleteCompanyRepository: MockProxy<IDeleteCompanyRepository>;
  let mockFindCompanyByIdRepository: MockProxy<IFindCompanyByIdRepository>;

  let deleteUseCase: IDeleteCompanyUseCase;

  beforeEach(() => {
    mockDeleteCompanyRepository = mock<IDeleteCompanyRepository>();
    mockFindCompanyByIdRepository = mock<IFindCompanyByIdRepository>();
    deleteUseCase = new DeleteCompanyUseCase(
      mockDeleteCompanyRepository,
      mockFindCompanyByIdRepository
    );
  });

  it('should be able to delete an company', async () => {
    const deleteUseCaseRequestDTO = {
      id: '5f6d7c2f9e06c933d4a4b4c4b',
    };

    const resultRepository = new Company('company name', '5f6d7c2f9e06c933d4a4b4c4d');

    mockFindCompanyByIdRepository.findById.mockResolvedValueOnce(resultRepository);

    await deleteUseCase.execute(deleteUseCaseRequestDTO);

    expect(mockDeleteCompanyRepository.delete).toHaveBeenCalled();
  });
});
