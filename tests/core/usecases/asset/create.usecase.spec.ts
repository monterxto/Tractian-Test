import { CreateAssetUseCase, ICreateAssetUseCase } from '@/core/usecases/asset/create';
import {
  CreateAssetUseCaseRequestDTO,
  CreateAssetUseCaseResponseDTO,
} from '@/core/usecases/asset/create/dto';
import { ICreateAssetRepository } from '@/core/repositories/asset';
import { mock, MockProxy } from 'jest-mock-extended';
import { Asset } from '@/core/entities/asset.entity';

describe('CreateUseCase', () => {
  let mockAssetRepository: MockProxy<ICreateAssetRepository>;
  let createUseCase: ICreateAssetUseCase;

  beforeEach(() => {
    mockAssetRepository = mock<ICreateAssetRepository>();
    createUseCase = new CreateAssetUseCase(mockAssetRepository);
  });

  it('should be able to create an asset', async () => {
    mockAssetRepository.create.mockResolvedValue(
      new Asset(
        'image.jpg',
        'asset',
        'asset description',
        'asset model',
        'asset owner',
        'Running',
        '5f6d7c2f9e06c933d4a4b4c4c',
        100,
        '5f6d7c2f9e06c933d4a4b4c4b'
      )
    );

    const createUseCaseRequestDTO: CreateAssetUseCaseRequestDTO = {
      imageUrl: 'image.jpg',
      name: 'asset',
      description: 'asset description',
      model: 'asset model',
      owner: 'asset owner',
      status: 'Running',
      unitId: '5f6d7c2f9e06c933d4a4b4c4c',
    };

    const createUseCaseResponseDTO: CreateAssetUseCaseResponseDTO = await createUseCase.execute(
      createUseCaseRequestDTO
    );

    expect(createUseCaseResponseDTO).toEqual({
      id: '5f6d7c2f9e06c933d4a4b4c4b',
      imageUrl: 'image.jpg',
      name: 'asset',
      description: 'asset description',
      model: 'asset model',
      owner: 'asset owner',
      status: 'Running',
      healthLevel: 100,
      unitId: '5f6d7c2f9e06c933d4a4b4c4c',
    });
  });
});
