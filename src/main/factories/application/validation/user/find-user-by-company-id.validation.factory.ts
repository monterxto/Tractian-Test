import {
  ValidationComposite,
  CompanyExistsValidation,
  IdToObjectIdValidation,
} from '@/Application/validations';
import { Validation } from '@/Application/protocols';
import { makeDbFindCompanyById } from '@/main/factories/infra/repositories/mongodb';

export const makeFindUserByCompanyIdValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  validations.push(new IdToObjectIdValidation('companyId'));
  validations.push(new CompanyExistsValidation('companyId', makeDbFindCompanyById()));
  return new ValidationComposite(validations);
};
