import { ValidationComposite, IdToObjectIdValidation } from '@/Application/validations';
import { Validation } from '@/Application/protocols';

export const makeFindUnitByIdValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  validations.push(new IdToObjectIdValidation('id'));
  return new ValidationComposite(validations);
};
