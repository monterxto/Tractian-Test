import {
  ValidationComposite,
  RequiredFieldValidation,
  WhitelistValidation,
} from '@/Application/validations';
import { Validation } from '@/Application/protocols';

export const makeCreateCompanyValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  const fields = ['name'];
  validations.push(new WhitelistValidation(fields));
  fields.forEach((field) => validations.push(new RequiredFieldValidation(field)));
  return new ValidationComposite(validations);
};
