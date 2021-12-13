import {
  IDeleteAssetUseCase,
  AssetIdRequestDto,
  DeleteAssetUseCase,
} from '@/core/usecases/asset/delete';
import { DeleteAssetsController } from '@/Application/controllers/asset';
import { mock, MockProxy } from 'jest-mock-extended';

describe('Delete asset controller', () => {
  let mockDeleteUseCase: MockProxy<IDeleteAssetUseCase>;
  let deleteAssetController: DeleteAssetsController;

  const mockAssetIdRequest: AssetIdRequestDto = {
    id: 'id',
  };

  beforeEach(() => {
    mockDeleteUseCase = mock<IDeleteAssetUseCase>();

    deleteAssetController = new DeleteAssetsController(mockDeleteUseCase);
  });

  it('should call delete use case', async () => {
    const result = await deleteAssetController.handle(mockAssetIdRequest);

    const mockResultHttp = {
      body: null,
      statusCode: 204,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
