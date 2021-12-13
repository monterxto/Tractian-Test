import { serverError, ok, notFound, badRequest } from '@/Application/helpers';
import {
  IFindAssetByIdUseCase,
  FindAssetByIdUseCaseRequestDTO,
} from '@/core/usecases/asset/find_by_id';
import { HttpResponse } from '@/Application/protocols';
import { NotFoundError } from '@/core/errors';
export class FindAssetByIdController {
  constructor(private readonly findAssetByIdUseCase: IFindAssetByIdUseCase) {}

  async handle(request: FindAssetByIdUseCaseRequestDTO): Promise<HttpResponse> {
    try {
      const asset = await this.findAssetByIdUseCase.execute(request);
      if (asset instanceof NotFoundError) return notFound(asset);
      return ok(asset);
    } catch (error) {
      return serverError(error);
    }
  }
}
