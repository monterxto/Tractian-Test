import {
  IUpdateAssetUseCase,
  AssetIdRequestDto,
  UpdateAssetUseCase,
  UpdateAssetUseCaseRequestDTO,
} from '@/core/usecases/asset/update';
import { UpdateAssetController } from '@/Application/controllers/asset';
import { Validation } from '@/Application/protocols';
import { mock, MockProxy } from 'jest-mock-extended';

// describe('Update unit controller', () => {
//   let mockUpdateUnitUseCase: MockProxy<IUpdateUnitUseCase>;
//   let mockValidation: MockProxy<Validation>;
//   let updateUnitController: UpdateUnitController;

//   const mockUpdateUnitUseCaseRequestDTO: UpdateUnitUseCaseRequestDTO = {
//     name: 'unit new name',
//     companyId: '61b6410829c95e3f7341a158',
//     address: 'rua new tal',
//   };

//   const mockUnitIdRequestDTO: UnitIdRequestDto = {
//     id: '61b6410829c95e3f7341a159'
//   };

//   beforeEach(() => {
//     mockUpdateUnitUseCase = mock<IUpdateUnitUseCase>();
//     mockValidation = mock<Validation>();

//     updateUnitController = new UpdateUnitController(mockUpdateUnitUseCase, mockValidation);
//   });

//   it('should call update unit use case', async () => {

//     mockUpdateUnitUseCase.execute.mockResolvedValue(null);

//     const result = await updateUnitController.handle({...mockUpdateUnitUseCaseRequestDTO, ...mockUnitIdRequestDTO});

//     const mockResultHttp = {
//       body: null,
//       statusCode: 204,
//     };

//     expect(result).toEqual(mockResultHttp);
//   });
// });
describe('Update asset controller', () => {
  let mockUpdateAssetUseCase: MockProxy<IUpdateAssetUseCase>;
  let mockValidation: MockProxy<Validation>;
  let updateAssetController: UpdateAssetController;

  const mockUpdateAssetUseCaseRequestDTO: UpdateAssetUseCaseRequestDTO = {
    imageUrl: 'imageUrl',
    name: 'asset name',
    description: 'asset description',
    model: 'ABC-123',
    owner: 'Uepa',
    status: 'Running',
    healthLevel: 80,
    unitId: '61b621194502dfe91af1bae4',
  };

  const mockAssetIdRequestDTO: AssetIdRequestDto = {
    id: '61b6410829c95e3f7341a159',
  };

  beforeEach(() => {
    mockUpdateAssetUseCase = mock<IUpdateAssetUseCase>();
    mockValidation = mock<Validation>();

    updateAssetController = new UpdateAssetController(mockUpdateAssetUseCase, mockValidation);
  });

  it('should call update asset use case', async () => {
    mockUpdateAssetUseCase.execute.mockResolvedValue(null);

    const result = await updateAssetController.handle({
      ...mockUpdateAssetUseCaseRequestDTO,
      ...mockAssetIdRequestDTO,
    });

    const mockResultHttp = {
      body: null,
      statusCode: 204,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
