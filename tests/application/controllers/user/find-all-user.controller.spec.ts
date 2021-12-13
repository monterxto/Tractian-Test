import {
  IFindAllUserUseCase,
  FindAllUserUseCase,
  FindAllUserUseCaseResponseDTO,
} from '@/core/usecases/user/find_all';
import { FindAllUserController } from '@/Application/controllers/user';
import { mock, MockProxy } from 'jest-mock-extended';

describe('Find all user controller', () => {
  let mockFindAllUserUseCase: MockProxy<IFindAllUserUseCase>;
  let findAllUserController: FindAllUserController;

  const mockFindAllUserUseCaseResponseDTO: FindAllUserUseCaseResponseDTO[] = [
    {
      id: '61b621194502dfe91af1bae4',
      name: 'user name',
      companyId: '61b6410829c95e3f7341a158',
    },
  ];

  beforeEach(() => {
    mockFindAllUserUseCase = mock<IFindAllUserUseCase>();
    mockFindAllUserUseCase.execute.mockResolvedValue(mockFindAllUserUseCaseResponseDTO);

    findAllUserController = new FindAllUserController(mockFindAllUserUseCase);
  });

  it('should call find all use case', async () => {
    const result = await findAllUserController.handle();

    const mockResultHttp = {
      body: mockFindAllUserUseCaseResponseDTO,
      statusCode: 200,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
