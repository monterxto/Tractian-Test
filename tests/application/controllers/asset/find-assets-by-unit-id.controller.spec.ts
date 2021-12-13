import {
  IFindAssetByUnitIdUseCase,
  FindAssetByUnitIdUseCase,
  FindAssetByUnitIdUseCaseRequestDTO,
  FindAssetByUnitIdUseCaseResponseDTO,
} from '@/core/usecases/asset/find_by_unit_id';
import { FindAssetByUnitIdController } from '@/Application/controllers/asset';
import { Validation } from '@/Application/protocols';
import { mock, MockProxy } from 'jest-mock-extended';

describe('Find asset by unit id controller', () => {
  let mockFindAssetByUnitIdUseCase: MockProxy<IFindAssetByUnitIdUseCase>;
  let mockValidation: MockProxy<Validation>;
  let findAssetByUnitIdController: FindAssetByUnitIdController;

  const mockFindAssetByUnitIdUseCaseRequestDTO: FindAssetByUnitIdUseCaseRequestDTO = {
    unitId: 'unitId',
  };

  const mockFindAssetByUnitIdUseCaseResponseDTO: FindAssetByUnitIdUseCaseResponseDTO[] = [
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
    mockFindAssetByUnitIdUseCase = mock<IFindAssetByUnitIdUseCase>();
    mockValidation = mock<Validation>();

    findAssetByUnitIdController = new FindAssetByUnitIdController(
      mockFindAssetByUnitIdUseCase,
      mockValidation
    );
  });

  it('should call find asset by unit id use case', async () => {
    mockFindAssetByUnitIdUseCase.execute.mockResolvedValue(mockFindAssetByUnitIdUseCaseResponseDTO);

    const result = await findAssetByUnitIdController.handle(mockFindAssetByUnitIdUseCaseRequestDTO);

    const mockResultHttp = {
      body: mockFindAssetByUnitIdUseCaseResponseDTO,
      statusCode: 200,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
