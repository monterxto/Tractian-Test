import { UpdateUserUseCase, IUpdateUserUseCase } from '@/core/usecases/user/update';
import { UpdateUserUseCaseRequestDTO, UserIdRequestDto } from '@/core/usecases/user/update/dto';
import { IUpdateUserRepository, IFindUserByIdRepository } from '@/core/repositories/user';
import { mock, MockProxy } from 'jest-mock-extended';
import { User } from '@/core/entities/user.entity';

describe('UpdateUseCase', () => {
  let mockUpdateUserRepository: MockProxy<IUpdateUserRepository>;
  let mockFindUserByIdRepository: MockProxy<IFindUserByIdRepository>;

  let updateUseCase: IUpdateUserUseCase;

  beforeEach(() => {
    mockUpdateUserRepository = mock<IUpdateUserRepository>();
    mockFindUserByIdRepository = mock<IFindUserByIdRepository>();
    updateUseCase = new UpdateUserUseCase(mockUpdateUserRepository, mockFindUserByIdRepository);
  });

  it('should be able to update an user', async () => {
    const updateUseCaseRequestDTO: Partial<UpdateUserUseCaseRequestDTO> = {
      name: 'new name',
    };

    const resultRepository = new User(
      'user name',
      '5f6d7c2f9e06c933d4a4b4c4d',
      '5f6d7c2f9e06c933d4a4b4c4b'
    );

    mockFindUserByIdRepository.findById.mockResolvedValue(resultRepository);

    await updateUseCase.execute({ id: '5f6d7c2f9e06c933d4a4b4c4b' }, updateUseCaseRequestDTO);

    expect(mockUpdateUserRepository.update).toHaveBeenCalled();
  });
});
