import { IFindUserByIdRepository, IDeleteUserRepository } from '@/core/repositories/user';
import { UserIdRequestDto, IDeleteUserUseCase } from './';

export class DeleteUserUseCase implements IDeleteUserUseCase {
  constructor(
    private readonly deleteRepository: IDeleteUserRepository,
    private readonly findByIdRepository: IFindUserByIdRepository
  ) {}

  async execute({ id }: UserIdRequestDto): Promise<void> {
    const userExists = await this.findByIdRepository.findById(id);
    if (!userExists) return;
    await this.deleteRepository.delete(id);
  }
}
