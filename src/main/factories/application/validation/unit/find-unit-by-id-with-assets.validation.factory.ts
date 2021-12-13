import { ValidationComposite, IdToObjectIdValidation } from '@/Application/validations';
import { Validation } from '@/Application/protocols';

export const makeFindUnitByIdWithAssetsValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  validations.push(new IdToObjectIdValidation('id'));
  return new ValidationComposite(validations);
};
