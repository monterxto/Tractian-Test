import { serverError, ok } from '@/Application/helpers';
import { IFindAllAssetUseCase } from '@/core/usecases/asset/find_all';
import { HttpResponse } from '@/Application/protocols';
export class FindAllAssetsController {
  constructor(private readonly findAllAssetUseCase: IFindAllAssetUseCase) {}

  async handle(): Promise<HttpResponse> {
    try {
      const assets = await this.findAllAssetUseCase.execute();
      return ok(assets);
    } catch (error) {
      return serverError(error);
    }
  }
}
