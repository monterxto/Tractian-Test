import { Validation } from '@/Application/protocols';
import { NotFoundError } from '@/Application/errors';
import { IFindUnitByIdRepository } from '@/core/repositories/unit';

export class UnitExistsValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly unitRepository: IFindUnitByIdRepository
  ) {}

  async validate(input: any): Promise<Error> {
    const isValid = await this.unitRepository.findById(input[this.fieldName]);
    if (!isValid) {
      return new NotFoundError(this.fieldName);
    }
  }
}
