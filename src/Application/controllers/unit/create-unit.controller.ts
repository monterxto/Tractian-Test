import { badRequest, serverError, created, notFound } from '@/Application/helpers';
import { ICreateUnitUseCase, CreateUnitUseCaseRequestDTO } from '@/core/usecases/unit/create';
import { HttpResponse, Validation } from '@/Application/protocols';
import { NotFoundError } from '@/Application/errors';

export class CreateUnitController {
  constructor(
    private readonly createUnitUseCase: ICreateUnitUseCase,
    private readonly createUnitValidation: Validation
  ) {}

  async handle(request: CreateUnitUseCaseRequestDTO): Promise<HttpResponse> {
    try {
      const error = await this.createUnitValidation.validate(request);
      if (error instanceof NotFoundError) return notFound(error);
      if (error instanceof Error) return badRequest(error);
      let unit = await this.createUnitUseCase.execute(request);
      return created(unit);
    } catch (error) {
      return serverError(error);
    }
  }
}
