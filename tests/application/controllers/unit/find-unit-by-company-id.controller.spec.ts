import {
  IFindUnitByCompanyIdUseCase,
  FindUnitByCompanyIdUseCase,
  FindUnitByCompanyIdUseCaseRequestDTO,
  FindUnitByCompanyIdUseCaseResponseDTO,
} from '@/core/usecases/unit/find_by_company_id';
import { FindUnitByCompanyIdController } from '@/Application/controllers/unit';
import { Validation } from '@/Application/protocols';
import { mock, MockProxy } from 'jest-mock-extended';

describe('Find unit by company id controller', () => {
  let mockFindUnitByCompanyIdUseCase: MockProxy<IFindUnitByCompanyIdUseCase>;
  let mockValidation: MockProxy<Validation>;
  let findUnitByCompanyIdController: FindUnitByCompanyIdController;

  const mockFindUnitByCompanyIdUseCaseRequestDTO: FindUnitByCompanyIdUseCaseRequestDTO = {
    companyId: '61b6410829c95e3f7341a158',
  };

  const mockFindUnitByCompanyIdUseCaseResponseDTO: FindUnitByCompanyIdUseCaseResponseDTO[] = [
    {
      id: '61b6410829c95e3f7341a159',
      name: 'unit new name',
      address: 'rua new tal',
      companyId: '61b6410829c95e3f7341a158',
    },
  ];

  beforeEach(() => {
    mockFindUnitByCompanyIdUseCase = mock<IFindUnitByCompanyIdUseCase>();
    mockValidation = mock<Validation>();

    findUnitByCompanyIdController = new FindUnitByCompanyIdController(
      mockFindUnitByCompanyIdUseCase,
      mockValidation
    );
  });

  it('should call find unit by company id use case', async () => {
    mockFindUnitByCompanyIdUseCase.execute.mockResolvedValue(
      mockFindUnitByCompanyIdUseCaseResponseDTO
    );

    const result = await findUnitByCompanyIdController.handle(
      mockFindUnitByCompanyIdUseCaseRequestDTO
    );

    const mockResultHttp = {
      body: mockFindUnitByCompanyIdUseCaseResponseDTO,
      statusCode: 200,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
