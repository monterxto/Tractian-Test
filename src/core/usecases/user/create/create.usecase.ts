import { User } from '@/core/entities/user.entity';
import { ICreateUserRepository } from '@/core/repositories/user';
import { CreateUserUseCaseRequestDTO, CreateUserUseCaseResponseDTO, ICreateUserUseCase } from './';

export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(private readonly UserRepository: ICreateUserRepository) {}

  async execute(
    createDtoRequest: CreateUserUseCaseRequestDTO
  ): Promise<CreateUserUseCaseResponseDTO> {
    const userEntity = new User(createDtoRequest.name, createDtoRequest.companyId);
    const userCreated = await this.UserRepository.create(userEntity);
    return {
      id: userCreated._id!,
      name: userCreated.name,
      companyId: userCreated.companyId,
    };
  }
}
