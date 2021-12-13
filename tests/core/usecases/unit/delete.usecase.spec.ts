import { DeleteUnitUseCase, IDeleteUnitUseCase } from '@/core/usecases/unit/delete';
import { IDeleteUnitRepository, IFindUnitByIdRepository } from '@/core/repositories/unit';
import { mock, MockProxy } from 'jest-mock-extended';
import { Unit } from '@/core/entities/unit.entity';

describe('DeleteUseCase', () => {
  let mockDeleteUnitRepository: MockProxy<IDeleteUnitRepository>;
  let mockFindUnitByIdRepository: MockProxy<IFindUnitByIdRepository>;

  let deleteUseCase: IDeleteUnitUseCase;

  beforeEach(() => {
    mockDeleteUnitRepository = mock<IDeleteUnitRepository>();
    mockFindUnitByIdRepository = mock<IFindUnitByIdRepository>();
    deleteUseCase = new DeleteUnitUseCase(mockDeleteUnitRepository, mockFindUnitByIdRepository);
  });

  it('should be able to delete an unit', async () => {
    const deleteUseCaseRequestDTO = {
      id: '5f6d7c2f9e06c933d4a4b4c4b',
    };

    const resultRepository = new Unit(
      'unit name',
      '5f6d7c2f9e06c933d4a4b4c4d',
      'unit address',
      '5f6d7c2f9e06c933d4a4b4c4b'
    );

    mockFindUnitByIdRepository.findById.mockResolvedValueOnce(resultRepository);

    await deleteUseCase.execute(deleteUseCaseRequestDTO);

    expect(mockDeleteUnitRepository.delete).toHaveBeenCalled();
  });
});
