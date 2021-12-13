import { ICreateUnitRepository } from '../../repositories/unit';
import { ICreateUnitUseCase, CreateUnitUseCase } from '@/core/usecases/unit/create';
import {
  CreateUnitUseCaseRequestDTO,
  CreateUnitUseCaseResponseDTO,
} from '@/core/usecases/unit/create/dto';
import { mock, MockProxy } from 'jest-mock-extended';
import { Unit } from '@/core/entities/unit.entity';

describe('CreateUseCase', () => {
  let mockAssetRepository: MockProxy<ICreateUnitRepository>;
  let createUseCase: ICreateUnitUseCase;

  beforeEach(() => {
    mockAssetRepository = mock<ICreateUnitRepository>();
    createUseCase = new CreateUnitUseCase(mockAssetRepository);
  });

  it('should be able to create a unit', async () => {
    mockAssetRepository.create.mockResolvedValue(
      new Unit(
        'unit name',
        '5f6d7c2f9e06c933d4a4b4c4d',
        'unit address',
        '5f6d7c2f9e06c933d4a4b4c4b'
      )
    );

    const createUseCaseRequestDTO: CreateUnitUseCaseRequestDTO = {
      name: 'unit name',
      address: 'unit address',
      companyId: '5f6d7c2f9e06c933d4a4b4c4d',
    };

    const createUseCaseResponseDTO: CreateUnitUseCaseResponseDTO = await createUseCase.execute(
      createUseCaseRequestDTO
    );

    expect(createUseCaseResponseDTO).toEqual({
      id: '5f6d7c2f9e06c933d4a4b4c4b',
      name: 'unit name',
      address: 'unit address',
      companyId: '5f6d7c2f9e06c933d4a4b4c4d',
    });
  });
});
