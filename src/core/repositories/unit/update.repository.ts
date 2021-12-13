import { UnitIdRequestDto, UpdateUnitUseCaseRequestDTO } from '@/core/usecases/unit/update/dto';

export interface IUpdateUnitRepository {
  update(id: string, updateDtoRequest: Partial<UpdateUnitUseCaseRequestDTO>): Promise<void>;
}
