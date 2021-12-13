import { serverError, noContent } from '@/Application/helpers';
import { IDeleteAssetUseCase, AssetIdRequestDto } from '@/core/usecases/asset/delete';
import { HttpResponse } from '@/Application/protocols';
export class DeleteAssetsController {
  constructor(private readonly deleteAssetUseCase: IDeleteAssetUseCase) {}

  async handle(request: AssetIdRequestDto): Promise<HttpResponse> {
    try {
      await this.deleteAssetUseCase.execute(request);
      return noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}
