import {
  IDeleteUnitUseCase,
  DeleteUnitUseCase,
  UnitIdRequestDto,
} from '@/core/usecases/unit/delete';
import { DeleteUnitController } from '@/Application/controllers/unit';
import { mock, MockProxy } from 'jest-mock-extended';

describe('Delete unit controller', () => {
  let mockDeleteUseCase: MockProxy<IDeleteUnitUseCase>;
  let deleteUnitController: DeleteUnitController;

  const mockUnitIdRequest: UnitIdRequestDto = {
    id: '61b621194502dfe91af1bae4',
  };

  beforeEach(() => {
    mockDeleteUseCase = mock<IDeleteUnitUseCase>();

    deleteUnitController = new DeleteUnitController(mockDeleteUseCase);
  });

  it('should call delete use case', async () => {
    const result = await deleteUnitController.handle(mockUnitIdRequest);

    const mockResultHttp = {
      body: null,
      statusCode: 204,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
