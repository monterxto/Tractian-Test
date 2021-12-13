import {
  ValidationComposite,
  WhitelistValidation,
  IdToObjectIdValidation,
  CompanyExistsValidation,
} from '@/Application/validations';
import { Validation } from '@/Application/protocols';
import { makeDbFindCompanyById } from '@/main/factories/infra/repositories/mongodb';

export const makeUpdateUnitValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  const fields = ['name', 'companyId', 'address'];
  validations.push(new IdToObjectIdValidation('id'));
  validations.push(new WhitelistValidation(fields, ['id']));
  validations.push(new CompanyExistsValidation('companyId', makeDbFindCompanyById()));
  return new ValidationComposite(validations);
};
