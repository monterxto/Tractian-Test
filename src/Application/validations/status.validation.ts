import { Validation } from '@/Application/protocols';
import { InvalidParamError } from '@/Application/errors';
import { Asset } from '@/core/entities/asset.entity';

export class StatusValidation implements Validation {
  constructor(private readonly fieldName: string) {}

  validate(input: any): Error {
    if (!input[this.fieldName]) return;
    const isValid = Asset.statusIsValid(input[this.fieldName]);
    if (!isValid) {
      return new InvalidParamError(this.fieldName);
    }
  }
}
