import { IFindAssetByIdUseCase } from '@/core/usecases/asset/find_by_id/find-by-id.usecase.interface';
import { FindAssetByIdUseCase } from '@/core/usecases/asset/find_by_id/find-by-id.usecase';
import { IFindAssetByIdRepository } from '@/core/repositories/asset';
import {
  FindAssetByIdUseCaseRequestDTO,
  FindAssetByIdUseCaseResponseDTO,
} from '@/core/usecases/asset/find_by_id/dto';
import { mock, MockProxy } from 'jest-mock-extended';
import { Asset } from '@/core/entities/asset.entity';

describe('FindByIdUseCase', () => {
  let findByIdUseCase: IFindAssetByIdUseCase;
  let mockAssetRepository: MockProxy<IFindAssetByIdRepository>;

  beforeAll(() => {
    mockAssetRepository = mock<IFindAssetByIdRepository>();
    findByIdUseCase = new FindAssetByIdUseCase(mockAssetRepository);
  });

  it('should return asset when findById is called', async () => {
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

    mockAssetRepository.findById.mockResolvedValue(asset);
    const request: FindAssetByIdUseCaseRequestDTO = {
      id: '5f6d7c2f9e06c933d4a4b4c4c',
    };

    const response: FindAssetByIdUseCaseResponseDTO = {
      id: '5f6d7c2f9e06c933d4a4b4c4c',
      imageUrl: 'image.jpg',
      name: 'asset',
      description: 'asset description',
      model: 'asset model',
      owner: 'asset owner',
      status: 'Running',
      healthLevel: 100,
      unitId: '5f6d7c2f9e06c933d4a4b4c4b',
    };

    expect(await findByIdUseCase.execute(request)).toEqual(response);
  });
});
