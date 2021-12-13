import { IFindUserByIdRepository } from '@/core/repositories/user';
import {
  FindUserByIdUseCaseRequestDTO,
  FindUserByIdUseCaseResponseDTO,
  IFindUserByIdUseCase,
} from './';
import { NotFoundError } from '@/core/errors';
export class FindUserByIdUseCase implements IFindUserByIdUseCase {
  constructor(private readonly userRepository: IFindUserByIdRepository) {}
  async execute({
    id,
  }: FindUserByIdUseCaseRequestDTO): Promise<FindUserByIdUseCaseResponseDTO | Error> {
    const user = await this.userRepository.findById(id);
    if (!user) return new NotFoundError('Unit not found');
    return {
      id: user._id!,
      name: user.name,
      companyId: user.companyId,
    };
  }
}
