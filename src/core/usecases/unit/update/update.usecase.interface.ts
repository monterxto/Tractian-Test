import { UnitIdRequestDto, UpdateUnitUseCaseRequestDTO } from './';

export interface IUpdateUnitUseCase {
  execute(
    { id }: UnitIdRequestDto,
    updateDtoRequest: Partial<UpdateUnitUseCaseRequestDTO>
  ): Promise<void | Error>;
}
