import {
  IFindUnitByIdUseCase,
  FindUnitByIdUseCase,
  FindUnitByIdUseCaseRequestDTO,
  FindUnitByIdUseCaseResponseDTO,
} from '@/core/usecases/unit/find_by_id';
import { FindUnitByIdController } from '@/Application/controllers/unit';
import { mock, MockProxy } from 'jest-mock-extended';
import { Validation } from '@/Application/protocols';

describe('Find unit by id controller', () => {
  let mockFindUnitByIdUseCase: MockProxy<IFindUnitByIdUseCase>;
  let mockValidation: MockProxy<Validation>;
  let findUnitByIdController: FindUnitByIdController;

  const mockFindUnitByIdUseCaseRequestDTO: FindUnitByIdUseCaseRequestDTO = {
    id: '61b621194502dfe91af1bae4',
  };

  const mockFindUnitByIdUseCaseResponseDTO: FindUnitByIdUseCaseResponseDTO = {
    id: '61b621194502dfe91af1bae4',
    name: 'unit name',
    companyId: '61b6410829c95e3f7341a158',
    address: 'rua tal',
  };

  beforeEach(() => {
    mockFindUnitByIdUseCase = mock<IFindUnitByIdUseCase>();
    mockValidation = mock<Validation>();
    
    mockFindUnitByIdUseCase.execute.mockResolvedValue(mockFindUnitByIdUseCaseResponseDTO);

    findUnitByIdController = new FindUnitByIdController(mockFindUnitByIdUseCase, mockValidation);
  });

  it('should call find unit by id use case', async () => {
    mockFindUnitByIdUseCase.execute.mockResolvedValue(mockFindUnitByIdUseCaseResponseDTO);
    mockValidation.validate.mockReturnValue(undefined);
    const result = await findUnitByIdController.handle(mockFindUnitByIdUseCaseRequestDTO);

    const mockResultHttp = {
      body: mockFindUnitByIdUseCaseResponseDTO,
      statusCode: 200,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
