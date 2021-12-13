import { serverError, noContent, badRequest, notFound } from '@/Application/helpers';
import {
  IUpdateCompanyUseCase,
  UpdateCompanyUseCaseRequestDTO,
  CompanyIdRequestDto,
} from '@/core/usecases/company/update';
import { HttpResponse, Validation } from '@/Application/protocols';
import { NotFoundError, InvalidParamError } from '@/core/errors';

export class UpdateCompanyController {
  constructor(
    private readonly updateCompanyUseCase: IUpdateCompanyUseCase,
    private readonly updateCompanyValidation: Validation
  ) {}

  async handle(
    request: UpdateCompanyUseCaseRequestDTO & CompanyIdRequestDto
  ): Promise<HttpResponse> {
    try {
      const error = await this.updateCompanyValidation.validate(request);
      if (error instanceof Error) return badRequest(error);
      const result = await this.updateCompanyUseCase.execute({ id: request.id }, request);
      if (result instanceof NotFoundError) return notFound(result);
      if (result instanceof InvalidParamError) return badRequest(result);
      return noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}
