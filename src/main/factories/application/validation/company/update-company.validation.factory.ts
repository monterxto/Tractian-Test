import {
  ValidationComposite,
  WhitelistValidation,
  IdToObjectIdValidation,
} from '@/Application/validations';
import { Validation } from '@/Application/protocols';

export const makeUpdateCompanyValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  const fields = ['name'];
  validations.push(new WhitelistValidation(fields, ['id']));
  validations.push(new IdToObjectIdValidation('id'));
  return new ValidationComposite(validations);
};
