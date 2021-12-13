import {
  IUpdateUnitUseCase,
  UnitIdRequestDto,
  UpdateUnitUseCase,
  UpdateUnitUseCaseRequestDTO,
} from '@/core/usecases/unit/update';
import { UpdateUnitController } from '@/Application/controllers/unit';
import { Validation } from '@/Application/protocols';
import { mock, MockProxy } from 'jest-mock-extended';

describe('Update unit controller', () => {
  let mockUpdateUnitUseCase: MockProxy<IUpdateUnitUseCase>;
  let mockValidation: MockProxy<Validation>;
  let updateUnitController: UpdateUnitController;

  const mockUpdateUnitUseCaseRequestDTO: UpdateUnitUseCaseRequestDTO = {
    name: 'unit new name',
    companyId: '61b6410829c95e3f7341a158',
    address: 'rua new tal',
  };

  const mockUnitIdRequestDTO: UnitIdRequestDto = {
    id: '61b6410829c95e3f7341a159',
  };

  beforeEach(() => {
    mockUpdateUnitUseCase = mock<IUpdateUnitUseCase>();
    mockValidation = mock<Validation>();

    updateUnitController = new UpdateUnitController(mockUpdateUnitUseCase, mockValidation);
  });

  it('should call update unit use case', async () => {
    mockUpdateUnitUseCase.execute.mockResolvedValue(null);

    const result = await updateUnitController.handle({
      ...mockUpdateUnitUseCaseRequestDTO,
      ...mockUnitIdRequestDTO,
    });

    const mockResultHttp = {
      body: null,
      statusCode: 204,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
