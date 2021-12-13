import { Validation } from '@/Application/protocols';
import { InvalidParamError } from '@/Application/errors';
import { IdToObjectIdValidation } from '@/Application/validations';

describe('Id To ObjectId Validation', () => {
  it('should return a InvalidParamError if id is not a valid ObjectId', () => {
    const idToObjectIdValidation = new IdToObjectIdValidation('id');
    const error = idToObjectIdValidation.validate({ id: 'invalid-id' });
    expect(error).toBeInstanceOf(InvalidParamError);
  });

  it('should return null if id is a valid ObjectId', () => {
    const idToObjectIdValidation = new IdToObjectIdValidation('id');
    const error = idToObjectIdValidation.validate({ id: '5f0f9c9a9e9f7e3f3b8a7c1a' });
    expect(error).toBeUndefined();
  });
});
