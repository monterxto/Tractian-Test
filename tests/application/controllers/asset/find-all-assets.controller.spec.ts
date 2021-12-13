import {
  IFindAllAssetUseCase,
  FindAllAssetUseCase,
  FindAllAssetUseCaseResponseDTO,
} from '@/core/usecases/asset/find_all';
import { FindAllAssetsController } from '@/Application/controllers/asset';
import { mock, MockProxy } from 'jest-mock-extended';

describe('Find all assets controller', () => {
  let mockFindAllAssetUseCase: MockProxy<IFindAllAssetUseCase>;
  let findAllAssetsController: FindAllAssetsController;

  const mockFindAllAssetUseCaseResponseDTO: FindAllAssetUseCaseResponseDTO[] = [
    {
      id: 'id',
      imageUrl: 'imageUrl',
      name: 'asset name',
      description: 'asset description',
      model: 'ABC-123',
      owner: 'Uepa',
      status: 'Running',
      healthLevel: 100,
      unitId: '61b621194502dfe91af1bae4',
    },
  ];

  beforeEach(() => {
    mockFindAllAssetUseCase = mock<IFindAllAssetUseCase>();
    mockFindAllAssetUseCase.execute.mockResolvedValue(mockFindAllAssetUseCaseResponseDTO);

    findAllAssetsController = new FindAllAssetsController(mockFindAllAssetUseCase);
  });

  it('should call find all use case', async () => {
    const result = await findAllAssetsController.handle();

    const mockResultHttp = {
      body: mockFindAllAssetUseCaseResponseDTO,
      statusCode: 200,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
