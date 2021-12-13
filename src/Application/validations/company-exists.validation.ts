import { Validation } from '@/Application/protocols';
import { NotFoundError } from '@/Application/errors';
import { IFindCompanyByIdRepository } from '@/core/repositories/company';

export class CompanyExistsValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly companyRepository: IFindCompanyByIdRepository
  ) {}

  async validate(input: any): Promise<Error> {
    const isValid = await this.companyRepository.findById(input[this.fieldName]);
    if (!isValid) {
      return new NotFoundError(this.fieldName);
    }
  }
}
