import {
  IFindAssetByIdUseCase,
  FindAssetByIdUseCase,
  FindAssetByIdUseCaseRequestDTO,
  FindAssetByIdUseCaseResponseDTO,
} from '@/core/usecases/asset/find_by_id';
import { FindAssetByIdController } from '@/Application/controllers/asset';
import { mock, MockProxy } from 'jest-mock-extended';

describe('Find asset by id controller', () => {
  let mockFindAssetByIdUseCase: MockProxy<IFindAssetByIdUseCase>;
  let findAssetByIdController: FindAssetByIdController;

  const mockFindAssetByIdUseCaseRequestDTO: FindAssetByIdUseCaseRequestDTO = {
    id: 'id',
  };

  const mockFindAssetByIdUseCaseResponseDTO: FindAssetByIdUseCaseResponseDTO = {
    id: 'id',
    imageUrl: 'imageUrl',
    name: 'asset name',
    description: 'asset description',
    model: 'ABC-123',
    owner: 'Uepa',
    status: 'Running',
    healthLevel: 100,
    unitId: '61b621194502dfe91af1bae4',
  };

  beforeEach(() => {
    mockFindAssetByIdUseCase = mock<IFindAssetByIdUseCase>();
    mockFindAssetByIdUseCase.execute.mockResolvedValue(mockFindAssetByIdUseCaseResponseDTO);

    findAssetByIdController = new FindAssetByIdController(mockFindAssetByIdUseCase);
  });

  it('should call find asset by id use case', async () => {
    mockFindAssetByIdUseCase.execute.mockResolvedValue(mockFindAssetByIdUseCaseResponseDTO);
    const result = await findAssetByIdController.handle(mockFindAssetByIdUseCaseRequestDTO);

    const mockResultHttp = {
      body: mockFindAssetByIdUseCaseResponseDTO,
      statusCode: 200,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
