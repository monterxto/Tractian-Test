import {
  ValidationComposite,
  RequiredFieldValidation,
  WhitelistValidation,
  IdToObjectIdValidation,
  CompanyExistsValidation,
} from '@/Application/validations';
import { Validation } from '@/Application/protocols';
import { makeDbFindCompanyById } from '@/main/factories/infra/repositories/mongodb';

export const makeCreateUserValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  const fields = ['name', 'companyId'];
  validations.push(new WhitelistValidation(fields));
  fields.forEach((field) => validations.push(new RequiredFieldValidation(field)));
  validations.push(new IdToObjectIdValidation('companyId'));
  validations.push(new CompanyExistsValidation('companyId', makeDbFindCompanyById()));
  return new ValidationComposite(validations);
};
