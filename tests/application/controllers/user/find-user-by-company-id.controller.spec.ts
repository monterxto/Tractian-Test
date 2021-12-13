import {
  IFindUserByCompanyIdUseCase,
  FindUserByCompanyIdUseCase,
  FindUserByCompanyIdUseCaseRequestDTO,
  FindUserByCompanyIdUseCaseResponseDTO,
} from '@/core/usecases/user/find_by_company_id';
import { FindUserByCompanyIdController } from '@/Application/controllers/user';
import { Validation } from '@/Application/protocols';
import { mock, MockProxy } from 'jest-mock-extended';

describe('Find user by company id controller', () => {
  let mockFindUserByCompanyIdUseCase: MockProxy<IFindUserByCompanyIdUseCase>;
  let mockValidation: MockProxy<Validation>;
  let findUserByCompanyIdController: FindUserByCompanyIdController;

  const mockFindUserByCompanyIdUseCaseRequestDTO: FindUserByCompanyIdUseCaseRequestDTO = {
    companyId: '61b6410829c95e3f7341a158',
  };

  const mockFindUserByCompanyIdUseCaseResponseDTO: FindUserByCompanyIdUseCaseResponseDTO[] = [
    {
      id: '61b6410829c95e3f7341a159',
      name: 'user new name',
      companyId: '61b6410829c95e3f7341a158',
    },
  ];

  beforeEach(() => {
    mockFindUserByCompanyIdUseCase = mock<IFindUserByCompanyIdUseCase>();
    mockValidation = mock<Validation>();

    findUserByCompanyIdController = new FindUserByCompanyIdController(
      mockFindUserByCompanyIdUseCase,
      mockValidation
    );
  });

  it('should call find user by company id use case', async () => {
    mockFindUserByCompanyIdUseCase.execute.mockResolvedValue(
      mockFindUserByCompanyIdUseCaseResponseDTO
    );

    const result = await findUserByCompanyIdController.handle(
      mockFindUserByCompanyIdUseCaseRequestDTO
    );

    const mockResultHttp = {
      body: mockFindUserByCompanyIdUseCaseResponseDTO,
      statusCode: 200,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
