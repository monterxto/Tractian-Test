import { serverError, ok, notFound, badRequest } from '@/Application/helpers';
import {
  IFindUnitByCompanyIdUseCase,
  FindUnitByCompanyIdUseCaseRequestDTO,
} from '@/core/usecases/unit/find_by_company_id';
import { HttpResponse, Validation } from '@/Application/protocols';
import { NotFoundError } from '@/Application/errors';
export class FindUnitByCompanyIdController {
  constructor(
    private readonly findUnitByCompanyIdUseCase: IFindUnitByCompanyIdUseCase,
    private readonly findUnitByCompanyIdValidation: Validation
  ) {}

  async handle(request: FindUnitByCompanyIdUseCaseRequestDTO): Promise<HttpResponse> {
    try {
      const error = await this.findUnitByCompanyIdValidation.validate(request);
      if (error instanceof NotFoundError) return notFound(error);
      if (error instanceof Error) return badRequest(error);
      const unit = await this.findUnitByCompanyIdUseCase.execute(request);
      return ok(unit);
    } catch (error) {
      return serverError(error);
    }
  }
}
