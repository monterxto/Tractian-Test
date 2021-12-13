import {
  ValidationComposite,
  UnitExistsValidation,
  IdToObjectIdValidation,
} from '@/Application/validations';
import { Validation } from '@/Application/protocols';
import { makeDbFindUnitById } from '@/main/factories/infra/repositories/mongodb';

export const makeFindAssetByUnitIdValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  validations.push(new IdToObjectIdValidation('unitId'));
  validations.push(new UnitExistsValidation('unitId', makeDbFindUnitById()));
  return new ValidationComposite(validations);
};
