import { IFindUserByIdRepository, IUpdateUserRepository } from '@/core/repositories/user';
import { UserIdRequestDto, UpdateUserUseCaseRequestDTO, IUpdateUserUseCase } from './';
import { NotFoundError } from '@/core/errors/not-found-error';

export class UpdateUserUseCase implements IUpdateUserUseCase {
  constructor(
    private readonly updateRepository: IUpdateUserRepository,
    private readonly findByIdRepository: IFindUserByIdRepository
  ) {}

  async execute(
    { id }: UserIdRequestDto,
    updateDtoRequest: Partial<UpdateUserUseCaseRequestDTO>
  ): Promise<void | Error> {
    const userExists = await this.findByIdRepository.findById(id);
    if (!userExists) return new NotFoundError('User not found');
    await this.updateRepository.update(id, updateDtoRequest);
  }
}
