import { Unit } from '@/core/entities/unit.entity';

export interface IFindUnitByIdRepository {
  findById(id: string): Promise<Unit>;
}
