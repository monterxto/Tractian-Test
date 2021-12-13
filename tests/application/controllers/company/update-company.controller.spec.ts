import {
  IUpdateCompanyUseCase,
  UpdateCompanyUseCase,
  CompanyIdRequestDto,
  UpdateCompanyUseCaseRequestDTO,
} from '@/core/usecases/company/update';
import { UpdateCompanyController } from '@/Application/controllers/company';
import { Validation } from '@/Application/protocols';
import { mock, MockProxy } from 'jest-mock-extended';

describe('Update company controller', () => {
  let mockUpdateCompanyUseCase: MockProxy<IUpdateCompanyUseCase>;
  let mockValidation: MockProxy<Validation>;
  let updateCompanyController: UpdateCompanyController;

  const mockUpdateCompanyUseCaseRequestDTO: UpdateCompanyUseCaseRequestDTO = {
    name: 'company new name',
  };

  const mockCompanyIdRequestDTO: CompanyIdRequestDto = {
    id: '61b6410829c95e3f7341a159',
  };

  beforeEach(() => {
    mockUpdateCompanyUseCase = mock<IUpdateCompanyUseCase>();
    mockValidation = mock<Validation>();

    updateCompanyController = new UpdateCompanyController(mockUpdateCompanyUseCase, mockValidation);
  });

  it('should call update company use case', async () => {
    mockUpdateCompanyUseCase.execute.mockResolvedValue(null);

    const result = await updateCompanyController.handle({
      ...mockUpdateCompanyUseCaseRequestDTO,
      ...mockCompanyIdRequestDTO,
    });

    const mockResultHttp = {
      body: null,
      statusCode: 204,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
