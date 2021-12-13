import { UpdateAssetUseCase, IUpdateAssetUseCase } from '@/core/usecases/asset/update';
import { UpdateAssetUseCaseRequestDTO, AssetIdRequestDto } from '@/core/usecases/asset/update/dto';
import { IUpdateAssetRepository, IFindAssetByIdRepository } from '@/core/repositories/asset';
import { mock, MockProxy } from 'jest-mock-extended';
import { Asset } from '@/core/entities';
describe('UpdateUseCase', () => {
  let mockUpdateAssetRepository: MockProxy<IUpdateAssetRepository>;
  let mockFindAssetByIdRepository: MockProxy<IFindAssetByIdRepository>;

  let updateUseCase: IUpdateAssetUseCase;

  beforeEach(() => {
    mockUpdateAssetRepository = mock<IUpdateAssetRepository>();
    mockFindAssetByIdRepository = mock<IFindAssetByIdRepository>();
    updateUseCase = new UpdateAssetUseCase(mockUpdateAssetRepository, mockFindAssetByIdRepository);
  });

  it('should be able to update an asset', async () => {
    const updateUseCaseRequestDTO: Partial<UpdateAssetUseCaseRequestDTO> = {
      imageUrl: 'image.jpg',
      name: 'new name',
      description: 'new description',
      owner: 'new owner',
      status: 'Running',
    };
    let assetIdRequestDto: AssetIdRequestDto = {
      id: '5f6d7c2f9e06c933d4a4b4c4b',
    };
    const resultFindByIdAssetRepository = new Asset(
      'image.jpg',
      'asset',
      'asset description',
      'asset model',
      'asset owner',
      'Running',
      '5f6d7c2f9e06c933d4a4b4c4c',
      100,
      '5f6d7c2f9e06c933d4a4b4c4b'
    );
    mockFindAssetByIdRepository.findById.mockResolvedValue(resultFindByIdAssetRepository);
    await updateUseCase.execute(assetIdRequestDto, updateUseCaseRequestDTO);

    expect(mockUpdateAssetRepository.update).toHaveBeenCalled();
  });
});
