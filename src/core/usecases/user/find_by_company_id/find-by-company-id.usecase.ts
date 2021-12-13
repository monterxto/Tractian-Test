import { IFindByCompanyIdUserRepository } from '@/core/repositories/user';
import {
  FindUserByCompanyIdUseCaseRequestDTO,
  FindUserByCompanyIdUseCaseResponseDTO,
  IFindUserByCompanyIdUseCase,
} from './';
export class FindUserByCompanyIdUseCase implements IFindUserByCompanyIdUseCase {
  constructor(private readonly userRepository: IFindByCompanyIdUserRepository) {}
  async execute({
    companyId,
  }: FindUserByCompanyIdUseCaseRequestDTO): Promise<FindUserByCompanyIdUseCaseResponseDTO[]> {
    const users = await this.userRepository.findByCompanyId(companyId);
    return users.map((user) => ({
      id: user._id!,
      name: user.name,
      companyId: user.companyId,
    }));
  }
}
