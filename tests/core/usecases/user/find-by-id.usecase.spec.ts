import { IFindUserByIdUseCase, FindUserByIdUseCase } from '@/core/usecases/user/find_by_id';
import { IFindUserByIdRepository } from '@/core/repositories/user';
import {
  FindUserByIdUseCaseRequestDTO,
  FindUserByIdUseCaseResponseDTO,
} from '@/core/usecases/user/find_by_id/dto';
import { mock, MockProxy } from 'jest-mock-extended';
import { User } from '@/core/entities/user.entity';

describe('FindByIdUseCase', () => {
  let findByIdUseCase: IFindUserByIdUseCase;
  let mockUserRepository: MockProxy<IFindUserByIdRepository>;

  beforeAll(() => {
    mockUserRepository = mock<IFindUserByIdRepository>();
    findByIdUseCase = new FindUserByIdUseCase(mockUserRepository);
  });

  it('should return user when findById is called', async () => {
    const resultRepository = new User(
      'user name',
      '5f6d7c2f9e06c933d4a4b4c4d',
      '5f6d7c2f9e06c933d4a4b4c4b'
    );

    mockUserRepository.findById.mockResolvedValue(resultRepository);
    const request: FindUserByIdUseCaseRequestDTO = {
      id: '5f6d7c2f9e06c933d4a4b4c4b',
    };

    const response: FindUserByIdUseCaseResponseDTO = {
      id: '5f6d7c2f9e06c933d4a4b4c4b',
      name: 'user name',
      companyId: '5f6d7c2f9e06c933d4a4b4c4d',
    };

    expect(await findByIdUseCase.execute(request)).toEqual(response);
  });
});
