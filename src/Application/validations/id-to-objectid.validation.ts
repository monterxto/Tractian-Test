import { Validation } from '@/Application/protocols';
import { InvalidParamError } from '@/Application/errors';
import { Types } from 'mongoose';

export class IdToObjectIdValidation implements Validation {
  constructor(private readonly fieldName: string) {}

  validate(input: any): Error {
    try {
      input[this.fieldName] = new Types.ObjectId(input[this.fieldName]);
    } catch (error) {
      return new InvalidParamError(this.fieldName);
    }
  }
}
