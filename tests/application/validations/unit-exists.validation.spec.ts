import { Validation } from '@/Application/protocols';
import { NotFoundError } from '@/Application/errors';
import { IFindUnitByIdRepository } from '@/core/repositories/unit';
import { UnitExistsValidation } from '@/Application/validations';
import { Unit } from '@/core/entities';
import { mock, MockProxy } from 'jest-mock-extended';

describe('Unit Exists Validation', () => {
  let mockValidation: MockProxy<Validation>;
  let mockFindUnitByIdRepository: MockProxy<IFindUnitByIdRepository>;
  let unitExistsValidation: UnitExistsValidation;

  beforeEach(() => {
    mockValidation = mock<Validation>();
    mockFindUnitByIdRepository = mock<IFindUnitByIdRepository>();

    unitExistsValidation = new UnitExistsValidation('unitId', mockFindUnitByIdRepository);
  });

  it('should return a NotFoundError if unit does not exist', async () => {
    mockFindUnitByIdRepository.findById.mockResolvedValue(undefined);

    expect(await unitExistsValidation.validate({ unitId: 'unitId' })).toBeInstanceOf(NotFoundError);
  });

  it('should return undefined if unit exists', async () => {
    mockFindUnitByIdRepository.findById.mockResolvedValue(
      new Unit('name', '61b6410829c95e3f7341a158', 'rua tal')
    );

    expect(await unitExistsValidation.validate({ unitId: 'unitId' })).toBeUndefined();
  });
});
