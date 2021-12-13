import { DeleteAssetUseCase, IDeleteAssetUseCase } from '@/core/usecases/asset/delete';
import { IDeleteAssetRepository, IFindAssetByIdRepository } from '@/core/repositories/asset';
import { mock, MockProxy } from 'jest-mock-extended';
import { Asset } from '@/core/entities/asset.entity';

describe('DeleteUseCase', () => {
  let mockDeleteAssetRepository: MockProxy<IDeleteAssetRepository>;
  let mockFindAssetByIdRepository: MockProxy<IFindAssetByIdRepository>;

  let deleteUseCase: IDeleteAssetUseCase;

  beforeEach(() => {
    mockDeleteAssetRepository = mock<IDeleteAssetRepository>();
    mockFindAssetByIdRepository = mock<IFindAssetByIdRepository>();
    deleteUseCase = new DeleteAssetUseCase(mockDeleteAssetRepository, mockFindAssetByIdRepository);
  });

  it('should be able to delete an asset', async () => {
    const deleteUseCaseRequestDTO = {
      id: '5f6d7c2f9e06c933d4a4b4c4b',
    };

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

    mockFindAssetByIdRepository.findById.mockResolvedValue(asset);

    await deleteUseCase.execute(deleteUseCaseRequestDTO);

    expect(mockDeleteAssetRepository.delete).toHaveBeenCalled();
  });
});
