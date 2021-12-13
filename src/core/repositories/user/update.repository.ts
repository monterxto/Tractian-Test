import { UserIdRequestDto, UpdateUserUseCaseRequestDTO } from '@/core/usecases/user/update/dto';

export interface IUpdateUserRepository {
  update(id: string, updateDtoRequest: Partial<UpdateUserUseCaseRequestDTO>): Promise<void>;
}
