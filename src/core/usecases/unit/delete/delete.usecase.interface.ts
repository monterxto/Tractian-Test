import { UnitIdRequestDto } from './';

export interface IDeleteUnitUseCase {
  execute({ id }: UnitIdRequestDto): Promise<void>;
}
