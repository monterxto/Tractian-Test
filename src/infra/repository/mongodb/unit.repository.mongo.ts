import {
  ICreateUnitRepository,
  IFindAllUnitRepository,
  IFindUnitByIdRepository,
  IUpdateUnitRepository,
  IDeleteUnitRepository,
  IFindByCompanyIdUnitRepository,
} from '@/core/repositories/unit';
import { UnitModel, UnitDocument } from '@/infra/entities/mongodb';
import { Unit } from '@/core/entities/unit.entity';
import { UnitAdapter } from '@/adapter/infra';
import { UpdateUnitUseCaseRequestDTO } from '@/core/usecases/unit/update';

export class UnitMongoRepository
  implements
    ICreateUnitRepository,
    IFindAllUnitRepository,
    IFindUnitByIdRepository,
    IUpdateUnitRepository,
    IDeleteUnitRepository,
    IFindByCompanyIdUnitRepository
{
  async create(unit: Unit): Promise<Unit> {
    try {
      const unitCreated: UnitDocument = await UnitModel.create(unit);
      return UnitAdapter.create(unitCreated);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll(): Promise<Unit[]> {
    try {
      const units: UnitDocument[] = await UnitModel.find();
      return UnitAdapter.createList(units);
    } catch (error) {
      console.log(error);
    }
  }

  async findById(id: string): Promise<Unit> {
    try {
      const unit: UnitDocument = await UnitModel.findById(id);
      if (!unit) return null;
      return UnitAdapter.create(unit);
    } catch (error) {
      console.log(error);
    }
  }

  async findByCompanyId(companyId: string): Promise<Unit[]> {
    try {
      const units: UnitDocument[] = await UnitModel.find({ companyId });
      return UnitAdapter.createList(units);
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: string, updateDtoRequest: Partial<UpdateUnitUseCaseRequestDTO>): Promise<void> {
    try {
      await UnitModel.updateOne({ _id: id }, updateDtoRequest);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await UnitModel.deleteOne({ _id: id });
    } catch (error) {
      console.log(error);
    }
  }
}
