import { Unit } from '@/core/entities/unit.entity';
import { UnitDocument } from '@/infra/entities/mongodb';

export class UnitAdapter {
  static create(unit: UnitDocument): Unit {
    return new Unit(unit.name, unit.companyId, unit.address, unit._id);
  }

  static createList(units: UnitDocument[]): Unit[] {
    return units.map((unit) => new Unit(unit.name, unit.companyId, unit.address, unit._id));
  }
}
