import {
  IFindCompanyByIdUseCase,
  FindCompanyByIdUseCase,
  FindCompanyByIdUseCaseRequestDTO,
  FindCompanyByIdUseCaseResponseDTO,
} from '@/core/usecases/company/find_by_id';
import { FindCompanyByIdController } from '@/Application/controllers/company';
import { mock, MockProxy } from 'jest-mock-extended';

describe('Find company by id controller', () => {
  let mockFindCompanyByIdUseCase: MockProxy<IFindCompanyByIdUseCase>;
  let findCompanyByIdController: FindCompanyByIdController;

  const mockFindCompanyByIdUseCaseRequestDTO: FindCompanyByIdUseCaseRequestDTO = {
    id: '61b621194502dfe91af1bae4',
  };

  const mockFindCompanyByIdUseCaseResponseDTO: FindCompanyByIdUseCaseResponseDTO = {
    id: '61b621194502dfe91af1bae4',
    name: 'user name',
  };

  beforeEach(() => {
    mockFindCompanyByIdUseCase = mock<IFindCompanyByIdUseCase>();
    mockFindCompanyByIdUseCase.execute.mockResolvedValue(mockFindCompanyByIdUseCaseResponseDTO);

    findCompanyByIdController = new FindCompanyByIdController(mockFindCompanyByIdUseCase);
  });

  it('should call find company by id use case', async () => {
    mockFindCompanyByIdUseCase.execute.mockResolvedValue(mockFindCompanyByIdUseCaseResponseDTO);
    const result = await findCompanyByIdController.handle(mockFindCompanyByIdUseCaseRequestDTO);

    const mockResultHttp = {
      body: mockFindCompanyByIdUseCaseResponseDTO,
      statusCode: 200,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
