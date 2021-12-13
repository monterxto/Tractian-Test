import { serverError, noContent, badRequest, notFound } from '@/Application/helpers';
import {
  IUpdateUnitUseCase,
  UpdateUnitUseCaseRequestDTO,
  UnitIdRequestDto,
} from '@/core/usecases/unit/update';
import { HttpResponse, Validation } from '@/Application/protocols';
import { NotFoundError, InvalidParamError } from '@/core/errors';

export class UpdateUnitController {
  constructor(
    private readonly updateUnitUseCase: IUpdateUnitUseCase,
    private readonly updateUnitValidation: Validation
  ) {}

  async handle(request: UpdateUnitUseCaseRequestDTO & UnitIdRequestDto): Promise<HttpResponse> {
    try {
      const error = await this.updateUnitValidation.validate(request);
      if (error instanceof NotFoundError) return notFound(error);
      if (error instanceof Error) return badRequest(error);
      const result = await this.updateUnitUseCase.execute({ id: request.id }, request);
      if (result instanceof NotFoundError) return notFound(result);
      if (result instanceof InvalidParamError) return badRequest(result);
      return noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}
