import { Validation } from '@/Application/protocols';
import { NotFoundError } from '@/Application/errors';
import { IFindCompanyByIdRepository } from '@/core/repositories/company';
import { Company } from '@/core/entities';
import { CompanyExistsValidation } from '@/Application/validations';
import { mock, MockProxy } from 'jest-mock-extended';

describe('Company Exists Validation', () => {
  let mockValidation: MockProxy<Validation>;
  let mockFindCompanyByIdRepository: MockProxy<IFindCompanyByIdRepository>;
  let companyExistsValidation: CompanyExistsValidation;

  beforeEach(() => {
    mockValidation = mock<Validation>();
    mockFindCompanyByIdRepository = mock<IFindCompanyByIdRepository>();

    companyExistsValidation = new CompanyExistsValidation(
      'companyId',
      mockFindCompanyByIdRepository
    );
  });

  it('should return a NotFoundError if company does not exist', async () => {
    mockFindCompanyByIdRepository.findById.mockResolvedValue(undefined);

    expect(await companyExistsValidation.validate({ companyId: 'companyId' })).toBeInstanceOf(
      NotFoundError
    );
  });

  it('should return a undefined if company exists', async () => {
    mockFindCompanyByIdRepository.findById.mockResolvedValue(new Company('companyId'));

    expect(await companyExistsValidation.validate({ companyId: 'companyId' })).toBeUndefined();
  });
});
