import { serverError, ok, notFound, badRequest } from '@/Application/helpers';
import {
  IFindAssetByUnitIdUseCase,
  FindAssetByUnitIdUseCaseRequestDTO,
} from '@/core/usecases/asset/find_by_unit_id';
import { HttpResponse, Validation } from '@/Application/protocols';
import { NotFoundError } from '@/Application/errors';
export class FindAssetByUnitIdController {
  constructor(
    private readonly findAssetByUnitIdUseCase: IFindAssetByUnitIdUseCase,
    private readonly findAssetByUnitIdValidation: Validation
  ) {}

  async handle(request: FindAssetByUnitIdUseCaseRequestDTO): Promise<HttpResponse> {
    try {
      const error = await this.findAssetByUnitIdValidation.validate(request);
      if (error instanceof NotFoundError) return notFound(error);
      if (error) return badRequest(error);
      const asset = await this.findAssetByUnitIdUseCase.execute(request);
      return ok(asset);
    } catch (error) {
      return serverError(error);
    }
  }
}
