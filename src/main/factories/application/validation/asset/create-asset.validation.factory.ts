import {
  ValidationComposite,
  RequiredFieldValidation,
  StatusValidation,
  WhitelistValidation,
  UnitExistsValidation,
  IdToObjectIdValidation,
} from '@/Application/validations';
import { Validation } from '@/Application/protocols';
import { makeDbFindUnitById } from '@/main/factories/infra/repositories/mongodb';

export const makeCreateAssetValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  const fields = ['imageUrl', 'name', 'description', 'model', 'owner', 'status', 'unitId'];
  validations.push(new WhitelistValidation(fields));
  fields.forEach((field) => validations.push(new RequiredFieldValidation(field)));
  validations.push(new StatusValidation('status'));
  validations.push(new IdToObjectIdValidation('unitId'));
  validations.push(new UnitExistsValidation('unitId', makeDbFindUnitById()));
  return new ValidationComposite(validations);
};
