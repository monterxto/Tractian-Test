import {
  IFindUserByIdUseCase,
  FindUserByIdUseCase,
  FindUserByIdUseCaseRequestDTO,
  FindUserByIdUseCaseResponseDTO,
} from '@/core/usecases/user/find_by_id';
import { FindUserByIdController } from '@/Application/controllers/user';
import { mock, MockProxy } from 'jest-mock-extended';

describe('Find user by id controller', () => {
  let mockFindUserByIdUseCase: MockProxy<IFindUserByIdUseCase>;
  let findUserByIdController: FindUserByIdController;

  const mockFindUserByIdUseCaseRequestDTO: FindUserByIdUseCaseRequestDTO = {
    id: '61b621194502dfe91af1bae4',
  };

  const mockFindUserByIdUseCaseResponseDTO: FindUserByIdUseCaseResponseDTO = {
    id: '61b621194502dfe91af1bae4',
    name: 'user name',
    companyId: '61b6410829c95e3f7341a158',
  };

  beforeEach(() => {
    mockFindUserByIdUseCase = mock<IFindUserByIdUseCase>();
    mockFindUserByIdUseCase.execute.mockResolvedValue(mockFindUserByIdUseCaseResponseDTO);

    findUserByIdController = new FindUserByIdController(mockFindUserByIdUseCase);
  });

  it('should call find user by id use case', async () => {
    mockFindUserByIdUseCase.execute.mockResolvedValue(mockFindUserByIdUseCaseResponseDTO);
    const result = await findUserByIdController.handle(mockFindUserByIdUseCaseRequestDTO);

    const mockResultHttp = {
      body: mockFindUserByIdUseCaseResponseDTO,
      statusCode: 200,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
