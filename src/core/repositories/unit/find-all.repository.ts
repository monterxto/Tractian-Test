import { Unit } from '@/core/entities/unit.entity';

export interface IFindAllUnitRepository {
  findAll(): Promise<Unit[]>;
}
