import { Validation } from '@/Application/protocols';
import { InvalidParamError } from '@/Application/errors';
import { WhitelistValidation } from '@/Application/validations';

describe('Whitelist Validation', () => {
  let whitelistValidation: WhitelistValidation;
  beforeEach(() => {
    whitelistValidation = new WhitelistValidation(['name', 'address']);
  });

  it('should return a InvalidParamError if status is empty', () => {
    const error = whitelistValidation.validate({ nome: 'teste' });
    expect(error).toBeInstanceOf(InvalidParamError);
  });

  it('should return null if status is not empty', () => {
    const error = whitelistValidation.validate({ name: 'test' });
    expect(error).toBeUndefined();
  });
});
