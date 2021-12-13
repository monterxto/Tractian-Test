import {
  ValidationComposite,
  StatusValidation,
  WhitelistValidation,
  IdToObjectIdValidation,
} from '@/Application/validations';
import { Validation } from '@/Application/protocols';

export const makeUpdateAssetValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  const fields = ['imageUrl', 'name', 'description', 'model', 'owner', 'status', 'unitId'];
  validations.push(new StatusValidation('status'));
  validations.push(new IdToObjectIdValidation('id'));
  validations.push(new WhitelistValidation(fields, ['id']));
  return new ValidationComposite(validations);
};
