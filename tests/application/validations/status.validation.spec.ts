import { Validation } from '@/Application/protocols';
import { InvalidParamError } from '@/Application/errors';
import { StatusValidation } from '@/Application/validations';

describe('Status Validation', () => {
  let statusValidation: StatusValidation;
  beforeEach(() => {
    statusValidation = new StatusValidation('status');
  });

  it('should return a InvalidParamError if status is empty', () => {
    const error = statusValidation.validate({ status: 'invalid' });
    expect(error).toBeInstanceOf(InvalidParamError);
  });

  it('should return null if status is not empty', () => {
    const error = statusValidation.validate({ status: 'Running' });
    expect(error).toBeUndefined();
  });
});
