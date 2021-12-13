import {
  IFindUnitByIdWithAssetsUseCase,
  FindUnitByIdWithAssetsUseCase,
  FindUnitByIdWithAssetsUseCaseRequestDTO,
  FindUnitByIdWithAssetsUseCaseResponseDTO,
} from '@/core/usecases/unit/find_by_id_with_assets';
import { FindUnitByIdWithAssetsController } from '@/Application/controllers/unit';
import { mock, MockProxy } from 'jest-mock-extended';
import { Validation } from '@/Application/protocols';

describe('Find unit by id with assets controller', () => {
  let mockFindUnitByIdWithAssetsUseCase: MockProxy<IFindUnitByIdWithAssetsUseCase>;
  let mockValidation: MockProxy<Validation>;
  let findUnitByIdWithAssetsController: FindUnitByIdWithAssetsController;

  const mockFindUnitByIdWithAssetsUseCaseRequestDTO: FindUnitByIdWithAssetsUseCaseRequestDTO = {
    id: '61b6410829c95e3f7341a159',
  };

  const mockFindUnitByIdWithAssetsUseCaseResponseDTO: FindUnitByIdWithAssetsUseCaseResponseDTO = {
    id: '61b6410829c95e3f7341a159',
    name: 'unit name',
    address: 'rua tal',
    companyId: '61b6410829c95e3f7341a158',
    assets: [
      {
        id: '61b6410829c95e3f7341a15a',
        imageUrl: 'imageUrl',
        name: 'asset name',
        description: 'asset description',
        model: 'ABC-123',
        owner: 'Uepa',
        status: 'Running',
        healthLevel: 100,
        unitId: '61b621194502dfe91af1bae4',
      },
    ],
  };

  beforeEach(() => {
    mockFindUnitByIdWithAssetsUseCase = mock<IFindUnitByIdWithAssetsUseCase>();
    mockValidation = mock<Validation>();

    findUnitByIdWithAssetsController = new FindUnitByIdWithAssetsController(
      mockFindUnitByIdWithAssetsUseCase,
      mockValidation
    );
  });

  it('should call find unit by id with assets use case', async () => {
    mockFindUnitByIdWithAssetsUseCase.execute.mockResolvedValue(
      mockFindUnitByIdWithAssetsUseCaseResponseDTO
    );
    mockValidation.validate.mockReturnValue(undefined);

    const result = await findUnitByIdWithAssetsController.handle(
      mockFindUnitByIdWithAssetsUseCaseRequestDTO
    );

    const mockResultHttp = {
      body: mockFindUnitByIdWithAssetsUseCaseResponseDTO,
      statusCode: 200,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
