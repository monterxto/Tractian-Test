import { Validation } from '@/Application/protocols';
import { MissingParamError } from '@/Application/errors';
import { RequiredFieldValidation } from '@/Application/validations';

describe('Required Field Validation', () => {
  let requiredFieldValidation: RequiredFieldValidation;
  beforeEach(() => {
    requiredFieldValidation = new RequiredFieldValidation('field');
  });

  it('should return a InvalidParamError if field is empty', () => {
    requiredFieldValidation = new RequiredFieldValidation('field');
    const error = requiredFieldValidation.validate({ field: '' });
    expect(error).toBeInstanceOf(MissingParamError);
  });

  it('should return null if field is not empty', () => {
    const error = requiredFieldValidation.validate({ field: 'any_value' });
    expect(error).toBeUndefined();
  });
});
