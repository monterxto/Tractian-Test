import {
  ICreateUserUseCase,
  CreateUserUseCase,
  CreateUserUseCaseRequestDTO,
  CreateUserUseCaseResponseDTO,
} from '@/core/usecases/user/create';
import { CreateUserController } from '@/Application/controllers/user';
import { Validation } from '@/Application/protocols';
import { mock, MockProxy } from 'jest-mock-extended';

describe('Create user controller', () => {
  let mockCreateUseCase: MockProxy<ICreateUserUseCase>;
  let mockValidation: MockProxy<Validation>;
  let createUserController: CreateUserController;

  const mockUserDtoRequest: CreateUserUseCaseRequestDTO = {
    name: 'user name',
    companyId: '61b6410829c95e3f7341a158',
  };

  const mockUserDtoResponse: CreateUserUseCaseResponseDTO = {
    id: '61b621194502dfe91af1bae4',
    name: mockUserDtoRequest.name,
    companyId: mockUserDtoRequest.companyId,
  };

  beforeEach(() => {
    mockCreateUseCase = mock<ICreateUserUseCase>();
    mockValidation = mock<Validation>();

    createUserController = new CreateUserController(mockCreateUseCase, mockValidation);
  });

  it('should call create use case', async () => {
    mockCreateUseCase.execute.mockResolvedValue(mockUserDtoResponse);

    const result = await createUserController.handle(mockUserDtoRequest);

    const mockResultHttp = {
      body: mockUserDtoResponse,
      statusCode: 201,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
