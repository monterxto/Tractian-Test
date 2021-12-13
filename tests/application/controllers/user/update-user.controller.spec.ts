import {
  IUpdateUserUseCase,
  UserIdRequestDto,
  UpdateUserUseCase,
  UpdateUserUseCaseRequestDTO,
} from '@/core/usecases/user/update';
import { UpdateUserController } from '@/Application/controllers/user';
import { Validation } from '@/Application/protocols';
import { mock, MockProxy } from 'jest-mock-extended';

describe('Update user controller', () => {
  let mockUpdateUserUseCase: MockProxy<IUpdateUserUseCase>;
  let mockValidation: MockProxy<Validation>;
  let updateUserController: UpdateUserController;

  const mockUpdateUserUseCaseRequestDTO: UpdateUserUseCaseRequestDTO = {
    name: 'user new name',
    companyId: '61b6410829c95e3f7341a158',
  };

  const mockUserIdRequestDTO: UserIdRequestDto = {
    id: '61b6410829c95e3f7341a159',
  };

  beforeEach(() => {
    mockUpdateUserUseCase = mock<IUpdateUserUseCase>();
    mockValidation = mock<Validation>();

    updateUserController = new UpdateUserController(mockUpdateUserUseCase, mockValidation);
  });

  it('should call update user use case', async () => {
    mockUpdateUserUseCase.execute.mockResolvedValue(null);

    const result = await updateUserController.handle({
      ...mockUpdateUserUseCaseRequestDTO,
      ...mockUserIdRequestDTO,
    });

    const mockResultHttp = {
      body: null,
      statusCode: 204,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
