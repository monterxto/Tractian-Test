import { Unit } from '@/core/entities/unit.entity';

export interface ICreateUnitRepository {
  create(unit: Unit): Promise<Unit>;
}
