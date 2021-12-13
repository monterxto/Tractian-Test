import { Validation } from '@/Application/protocols';
import { InvalidParamError } from '@/Application/errors';

export class WhitelistValidation implements Validation {
  constructor(
    private readonly fieldNames: string[],
    private readonly fieldsIgnore: string[] = []
  ) {}

  validate(input: any): Error {
    for (const field of Object.keys(input)) {
      if (!this.fieldsIgnore.includes(field) && !this.fieldNames.includes(field)) {
        return new InvalidParamError(field);
      }
    }
  }
}
