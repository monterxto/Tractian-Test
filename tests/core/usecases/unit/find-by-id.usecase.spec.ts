import { IFindUnitByIdUseCase, FindUnitByIdUseCase } from '@/core/usecases/unit/find_by_id';
import { IFindUnitByIdRepository } from '@/core/repositories/unit';
import {
  FindUnitByIdUseCaseRequestDTO,
  FindUnitByIdUseCaseResponseDTO,
} from '@/core/usecases/unit/find_by_id/dto';
import { mock, MockProxy } from 'jest-mock-extended';
import { Unit } from '@/core/entities/unit.entity';

describe('FindByIdUseCase', () => {
  let findByIdUseCase: IFindUnitByIdUseCase;
  let mockUnitRepository: MockProxy<IFindUnitByIdRepository>;

  beforeAll(() => {
    mockUnitRepository = mock<IFindUnitByIdRepository>();
    findByIdUseCase = new FindUnitByIdUseCase(mockUnitRepository);
  });

  it('should return unit when findById is called', async () => {
    const resultRepository = new Unit(
      'unit name',
      '5f6d7c2f9e06c933d4a4b4c4d',
      'unit address',
      '5f6d7c2f9e06c933d4a4b4c4b'
    );

    mockUnitRepository.findById.mockResolvedValue(resultRepository);
    const request: FindUnitByIdUseCaseRequestDTO = {
      id: '5f6d7c2f9e06c933d4a4b4c4b',
    };

    const response: FindUnitByIdUseCaseResponseDTO = {
      id: '5f6d7c2f9e06c933d4a4b4c4b',
      name: 'unit name',
      address: 'unit address',
      companyId: '5f6d7c2f9e06c933d4a4b4c4d',
    };

    expect(await findByIdUseCase.execute(request)).toEqual(response);
  });
});
