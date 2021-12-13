import {
  IDeleteUserUseCase,
  DeleteUserUseCase,
  UserIdRequestDto,
} from '@/core/usecases/user/delete';
import { DeleteUserController } from '@/Application/controllers/user';
import { mock, MockProxy } from 'jest-mock-extended';

describe('Delete user controller', () => {
  let mockDeleteUseCase: MockProxy<IDeleteUserUseCase>;
  let deleteUserController: DeleteUserController;

  const mockUserIdRequest: UserIdRequestDto = {
    id: '61b621194502dfe91af1bae4',
  };

  beforeEach(() => {
    mockDeleteUseCase = mock<IDeleteUserUseCase>();

    deleteUserController = new DeleteUserController(mockDeleteUseCase);
  });

  it('should call delete use case', async () => {
    const result = await deleteUserController.handle(mockUserIdRequest);

    const mockResultHttp = {
      body: null,
      statusCode: 204,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
