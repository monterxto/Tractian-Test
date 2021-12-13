import {
  IFindAssetByUnitIdUseCase,
  FindAssetByUnitIdUseCase,
} from '@/core/usecases/asset/find_by_unit_id';
import { IFindByUnitIdAssetRepository } from '@/core/repositories/asset';
import {
  FindAssetByUnitIdUseCaseRequestDTO,
  FindAssetByUnitIdUseCaseResponseDTO,
} from '@/core/usecases/asset/find_by_unit_id/dto';
import { mock, MockProxy } from 'jest-mock-extended';
import { Asset } from '@/core/entities/asset.entity';

describe('FindByUnitIdUseCase', () => {
  let findByUnitIdUseCase: IFindAssetByUnitIdUseCase;
  let mockAssetRepository: MockProxy<IFindByUnitIdAssetRepository>;

  beforeAll(() => {
    mockAssetRepository = mock<IFindByUnitIdAssetRepository>();
    findByUnitIdUseCase = new FindAssetByUnitIdUseCase(mockAssetRepository);
  });

  it('should return asset when findByUnitId is called', async () => {
    const asset = new Asset(
      'image.jpg',
      'asset',
      'asset description',
      'asset model',
      'asset owner',
      'Running',
      '5f6d7c2f9e06c933d4a4b4c4b',
      100,
      '5f6d7c2f9e06c933d4a4b4c4c'
    );

    mockAssetRepository.findByUnitId.mockResolvedValue([asset]);
    const request: FindAssetByUnitIdUseCaseRequestDTO = {
      unitId: '5f6d7c2f9e06c933d4a4b4c4b',
    };

    const response: FindAssetByUnitIdUseCaseResponseDTO[] = [
      {
        id: '5f6d7c2f9e06c933d4a4b4c4c',
        imageUrl: 'image.jpg',
        name: 'asset',
        description: 'asset description',
        model: 'asset model',
        owner: 'asset owner',
        status: 'Running',
        healthLevel: 100,
        unitId: '5f6d7c2f9e06c933d4a4b4c4b',
      },
    ];

    expect(await findByUnitIdUseCase.execute(request)).toEqual(response);
  });
});
