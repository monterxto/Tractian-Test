import {
  ICreateCompanyUseCase,
  CreateCompanyUseCase,
  CreateCompanyUseCaseRequestDTO,
  CreateCompanyUseCaseResponseDTO,
} from '@/core/usecases/company/create';
import { CreateCompanyController } from '@/Application/controllers/company';
import { Validation } from '@/Application/protocols';
import { mock, MockProxy } from 'jest-mock-extended';

describe('Create company controller', () => {
  let mockCreateUseCase: MockProxy<ICreateCompanyUseCase>;
  let mockValidation: MockProxy<Validation>;
  let createCompanyController: CreateCompanyController;

  const mockCompanyDtoRequest: CreateCompanyUseCaseRequestDTO = {
    name: 'company name',
  };

  const mockCompanyDtoResponse: CreateCompanyUseCaseResponseDTO = {
    id: '61b621194502dfe91af1bae4',
    name: mockCompanyDtoRequest.name,
  };

  beforeEach(() => {
    mockCreateUseCase = mock<ICreateCompanyUseCase>();
    mockValidation = mock<Validation>();

    createCompanyController = new CreateCompanyController(mockCreateUseCase, mockValidation);
  });

  it('should call create use case', async () => {
    mockCreateUseCase.execute.mockResolvedValue(mockCompanyDtoResponse);

    const result = await createCompanyController.handle(mockCompanyDtoRequest);

    const mockResultHttp = {
      body: mockCompanyDtoResponse,
      statusCode: 201,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
