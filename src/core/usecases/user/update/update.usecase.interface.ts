import { UserIdRequestDto, UpdateUserUseCaseRequestDTO } from './';

export interface IUpdateUserUseCase {
  execute(
    { id }: UserIdRequestDto,
    updateDtoRequest: Partial<UpdateUserUseCaseRequestDTO>
  ): Promise<void | Error>;
}
