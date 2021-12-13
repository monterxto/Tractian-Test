import { IFindAllUserRepository } from '@/core/repositories/user';
import { FindAllUserUseCaseResponseDTO, IFindAllUserUseCase } from './';

export class FindAllUserUseCase implements IFindAllUserUseCase {
  constructor(private readonly userRepository: IFindAllUserRepository) {}
  async execute(): Promise<FindAllUserUseCaseResponseDTO[]> {
    const users = await this.userRepository.findAll();
    return users.map((user) => ({
      id: user._id!,
      name: user.name,
      companyId: user.companyId,
    }));
  }
}
