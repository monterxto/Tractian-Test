import { Unit } from '@/core/entities/unit.entity';

export interface IFindByCompanyIdUnitRepository {
  findByCompanyId(companyId: string): Promise<Unit[]>;
}
