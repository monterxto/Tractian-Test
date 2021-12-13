import { serverError, noContent, badRequest, notFound } from '@/Application/helpers';
import {
  IUpdateAssetUseCase,
  UpdateAssetUseCaseRequestDTO,
  AssetIdRequestDto,
} from '@/core/usecases/asset/update';
import { HttpResponse, Validation } from '@/Application/protocols';
import { NotFoundError, InvalidParamError } from '@/core/errors';
export class UpdateAssetController {
  constructor(
    private readonly updateAssetUseCase: IUpdateAssetUseCase,
    private readonly updateAssetValidation: Validation
  ) {}

  async handle(request: UpdateAssetUseCaseRequestDTO & AssetIdRequestDto): Promise<HttpResponse> {
    try {
      const error = await this.updateAssetValidation.validate(request);
      if (error instanceof Error) return badRequest(error);
      const result = await this.updateAssetUseCase.execute({ id: request.id }, request);
      if (result instanceof NotFoundError) return notFound(result);
      if (result instanceof InvalidParamError) return badRequest(result);
      return noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}
