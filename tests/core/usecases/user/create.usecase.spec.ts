import { ICreateUserRepository } from '../../repositories/user';
import { ICreateUserUseCase, CreateUserUseCase } from '@/core/usecases/user/create';
import {
  CreateUserUseCaseRequestDTO,
  CreateUserUseCaseResponseDTO,
} from '@/core/usecases/user/create/dto';
import { mock, MockProxy } from 'jest-mock-extended';
import { User } from '@/core/entities/user.entity';

describe('CreateUseCase', () => {
  let mockAssetRepository: MockProxy<ICreateUserRepository>;
  let createUseCase: ICreateUserUseCase;

  beforeEach(() => {
    mockAssetRepository = mock<ICreateUserRepository>();
    createUseCase = new CreateUserUseCase(mockAssetRepository);
  });

  it('should be able to create a user', async () => {
    mockAssetRepository.create.mockResolvedValue(
      new User('user name', '5f6d7c2f9e06c933d4a4b4c4d', '5f6d7c2f9e06c933d4a4b4c4b')
    );

    const createUseCaseRequestDTO: CreateUserUseCaseRequestDTO = {
      name: 'user name',
      companyId: '5f6d7c2f9e06c933d4a4b4c4d',
    };

    const createUseCaseResponseDTO: CreateUserUseCaseResponseDTO = await createUseCase.execute(
      createUseCaseRequestDTO
    );

    expect(createUseCaseResponseDTO).toEqual({
      id: '5f6d7c2f9e06c933d4a4b4c4b',
      name: 'user name',
      companyId: '5f6d7c2f9e06c933d4a4b4c4d',
    });
  });
});
