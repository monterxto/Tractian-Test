import { DeleteUserUseCase, IDeleteUserUseCase } from '@/core/usecases/user/delete';
import { IDeleteUserRepository, IFindUserByIdRepository } from '@/core/repositories/user';
import { mock, MockProxy } from 'jest-mock-extended';
import { User } from '@/core/entities/user.entity';

describe('DeleteUseCase', () => {
  let mockDeleteUserRepository: MockProxy<IDeleteUserRepository>;
  let mockFindUserByIdRepository: MockProxy<IFindUserByIdRepository>;

  let deleteUseCase: IDeleteUserUseCase;

  beforeEach(() => {
    mockDeleteUserRepository = mock<IDeleteUserRepository>();
    mockFindUserByIdRepository = mock<IFindUserByIdRepository>();
    deleteUseCase = new DeleteUserUseCase(mockDeleteUserRepository, mockFindUserByIdRepository);
  });

  it('should be able to delete an user', async () => {
    const deleteUseCaseRequestDTO = {
      id: '5f6d7c2f9e06c933d4a4b4c4b',
    };

    const resultRepository = new User(
      'user name',
      '5f6d7c2f9e06c933d4a4b4c4d',
      '5f6d7c2f9e06c933d4a4b4c4b'
    );

    mockFindUserByIdRepository.findById.mockResolvedValueOnce(resultRepository);

    await deleteUseCase.execute(deleteUseCaseRequestDTO);

    expect(mockDeleteUserRepository.delete).toHaveBeenCalled();
  });
});
