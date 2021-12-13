import {
  IFindAllCompanyUseCase,
  FindAllCompanyUseCase,
  FindAllCompanyUseCaseResponseDTO,
} from '@/core/usecases/company/find_all';
import { FindAllCompanyController } from '@/Application/controllers/company';
import { mock, MockProxy } from 'jest-mock-extended';

describe('Find all company controller', () => {
  let mockFindAllCompanyUseCase: MockProxy<IFindAllCompanyUseCase>;
  let findAllCompanyController: FindAllCompanyController;

  const mockFindAllCompanyUseCaseResponseDTO: FindAllCompanyUseCaseResponseDTO[] = [
    {
      id: '61b621194502dfe91af1bae4',
      name: 'company name',
    },
  ];

  beforeEach(() => {
    mockFindAllCompanyUseCase = mock<IFindAllCompanyUseCase>();
    mockFindAllCompanyUseCase.execute.mockResolvedValue(mockFindAllCompanyUseCaseResponseDTO);

    findAllCompanyController = new FindAllCompanyController(mockFindAllCompanyUseCase);
  });

  it('should call find all use case', async () => {
    const result = await findAllCompanyController.handle();

    const mockResultHttp = {
      body: mockFindAllCompanyUseCaseResponseDTO,
      statusCode: 200,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
