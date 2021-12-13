import { UpdateUnitUseCase, IUpdateUnitUseCase } from '@/core/usecases/unit/update';
import { UpdateUnitUseCaseRequestDTO, UnitIdRequestDto } from '@/core/usecases/unit/update/dto';
import { IUpdateUnitRepository, IFindUnitByIdRepository } from '@/core/repositories/unit';
import { mock, MockProxy } from 'jest-mock-extended';
import { Unit } from '@/core/entities/unit.entity';

describe('UpdateUseCase', () => {
  let mockUpdateUnitRepository: MockProxy<IUpdateUnitRepository>;
  let mockFindByIdUnitRepository: MockProxy<IFindUnitByIdRepository>;

  let updateUseCase: IUpdateUnitUseCase;

  beforeEach(() => {
    mockUpdateUnitRepository = mock<IUpdateUnitRepository>();
    mockFindByIdUnitRepository = mock<IFindUnitByIdRepository>();
    updateUseCase = new UpdateUnitUseCase(mockUpdateUnitRepository, mockFindByIdUnitRepository);
  });

  it('should be able to update an unit', async () => {
    const updateUseCaseRequestDTO: Partial<UpdateUnitUseCaseRequestDTO> = {
      name: 'new name',
      address: 'new address',
    };

    const resultRepository = new Unit(
      'unit name',
      '5f6d7c2f9e06c933d4a4b4c4d',
      'unit address',
      '5f6d7c2f9e06c933d4a4b4c4b'
    );

    mockFindByIdUnitRepository.findById.mockResolvedValue(resultRepository);

    await updateUseCase.execute({ id: '5f6d7c2f9e06c933d4a4b4c4b' }, updateUseCaseRequestDTO);

    expect(mockUpdateUnitRepository.update).toHaveBeenCalled();
  });
});
