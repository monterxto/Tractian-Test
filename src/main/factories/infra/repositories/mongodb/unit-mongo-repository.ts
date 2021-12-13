import {
  ICreateUnitRepository,
  IFindAllUnitRepository,
  IFindUnitByIdRepository,
  IUpdateUnitRepository,
  IDeleteUnitRepository,
  IFindByCompanyIdUnitRepository,
} from '@/core/repositories/unit';
import { UnitMongoRepository } from '@/infra/repository/mongodb/unit.repository.mongo';

export const makeDbCreateUnit = (): ICreateUnitRepository => {
  return new UnitMongoRepository();
};

export const makeDbFindAllUnit = (): IFindAllUnitRepository => {
  return new UnitMongoRepository();
};

export const makeDbFindUnitById = (): IFindUnitByIdRepository => {
  return new UnitMongoRepository();
};

export const makeDbFindUnitByCompanyId = (): IFindByCompanyIdUnitRepository => {
  return new UnitMongoRepository();
};

export const makeDbUpdateUnit = (): IUpdateUnitRepository => {
  return new UnitMongoRepository();
};

export const makeDbDeleteUnit = (): IDeleteUnitRepository => {
  return new UnitMongoRepository();
};
