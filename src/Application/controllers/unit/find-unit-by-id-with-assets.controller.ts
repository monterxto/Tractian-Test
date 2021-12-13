import { serverError, ok, notFound, badRequest } from '@/Application/helpers';
import {
  IFindUnitByIdWithAssetsUseCase,
  FindUnitByIdWithAssetsUseCaseRequestDTO,
} from '@/core/usecases/unit/find_by_id_with_assets';
import { HttpResponse, Validation } from '@/Application/protocols';
import { NotFoundError } from "@/core/errors";

export class FindUnitByIdWithAssetsController {
  constructor(
    private readonly findByIdWithAssetsUseCase: IFindUnitByIdWithAssetsUseCase,
    private readonly findByIdWithAssetIdValidation: Validation
  ) {}

  async handle(request: FindUnitByIdWithAssetsUseCaseRequestDTO): Promise<HttpResponse> {
    try {
      const error = await this.findByIdWithAssetIdValidation.validate(request);
      if (error instanceof Error) return badRequest(error);
      const unitWithAssets = await this.findByIdWithAssetsUseCase.execute(request);
      if (unitWithAssets instanceof NotFoundError) return notFound(unitWithAssets);
      return ok(unitWithAssets);
    } catch (error) {
      return serverError(error);
    }
  }
}
