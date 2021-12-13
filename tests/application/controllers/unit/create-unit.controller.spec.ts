import {
  ICreateUnitUseCase,
  CreateUnitUseCase,
  CreateUnitUseCaseRequestDTO,
  CreateUnitUseCaseResponseDTO,
} from '@/core/usecases/unit/create';
import { CreateUnitController } from '@/Application/controllers/unit';
import { Validation } from '@/Application/protocols';
import { mock, MockProxy } from 'jest-mock-extended';

describe('Create unit controller', () => {
  let mockCreateUseCase: MockProxy<ICreateUnitUseCase>;
  let mockValidation: MockProxy<Validation>;
  let createUnitController: CreateUnitController;

  const mockUnitDtoRequest: CreateUnitUseCaseRequestDTO = {
    name: 'unit name',
    companyId: '61b6410829c95e3f7341a158',
    address: 'rua tal',
  };

  const mockUnitDtoResponse: CreateUnitUseCaseResponseDTO = {
    id: '61b621194502dfe91af1bae4',
    name: mockUnitDtoRequest.name,
    companyId: mockUnitDtoRequest.companyId,
    address: mockUnitDtoRequest.address,
  };

  beforeEach(() => {
    mockCreateUseCase = mock<ICreateUnitUseCase>();
    mockValidation = mock<Validation>();

    createUnitController = new CreateUnitController(mockCreateUseCase, mockValidation);
  });

  it('should call create use case', async () => {
    mockCreateUseCase.execute.mockResolvedValue(mockUnitDtoResponse);

    const result = await createUnitController.handle(mockUnitDtoRequest);

    const mockResultHttp = {
      body: mockUnitDtoResponse,
      statusCode: 201,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
