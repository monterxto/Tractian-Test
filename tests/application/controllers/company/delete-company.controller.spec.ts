import {
  IDeleteCompanyUseCase,
  DeleteCompanyUseCase,
  CompanyIdRequestDto,
} from '@/core/usecases/company/delete';
import { DeleteCompanyController } from '@/Application/controllers/company';
import { mock, MockProxy } from 'jest-mock-extended';

describe('Delete company controller', () => {
  let mockDeleteUseCase: MockProxy<IDeleteCompanyUseCase>;
  let deleteCompanyController: DeleteCompanyController;

  const mockCompanyIdRequest: CompanyIdRequestDto = {
    id: '61b621194502dfe91af1bae4',
  };

  beforeEach(() => {
    mockDeleteUseCase = mock<IDeleteCompanyUseCase>();

    deleteCompanyController = new DeleteCompanyController(mockDeleteUseCase);
  });

  it('should call delete use case', async () => {
    const result = await deleteCompanyController.handle(mockCompanyIdRequest);

    const mockResultHttp = {
      body: null,
      statusCode: 204,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
