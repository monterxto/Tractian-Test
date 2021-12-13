import {
  IFindAllUnitUseCase,
  FindAllUnitUseCase,
  FindAllUnitUseCaseResponseDTO,
} from '@/core/usecases/unit/find_all';
import { FindAllUnitController } from '@/Application/controllers/unit';
import { mock, MockProxy } from 'jest-mock-extended';

describe('Find all unit controller', () => {
  let mockFindAllUnitUseCase: MockProxy<IFindAllUnitUseCase>;
  let findAllUnitController: FindAllUnitController;

  const mockFindAllUnitUseCaseResponseDTO: FindAllUnitUseCaseResponseDTO[] = [
    {
      id: '61b621194502dfe91af1bae4',
      name: 'unit name',
      companyId: '61b6410829c95e3f7341a158',
      address: 'rua tal',
    },
  ];

  beforeEach(() => {
    mockFindAllUnitUseCase = mock<IFindAllUnitUseCase>();
    mockFindAllUnitUseCase.execute.mockResolvedValue(mockFindAllUnitUseCaseResponseDTO);

    findAllUnitController = new FindAllUnitController(mockFindAllUnitUseCase);
  });

  it('should call find all use case', async () => {
    const result = await findAllUnitController.handle();

    const mockResultHttp = {
      body: mockFindAllUnitUseCaseResponseDTO,
      statusCode: 200,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
