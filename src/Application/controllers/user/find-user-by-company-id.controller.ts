import { serverError, ok, notFound, badRequest } from '@/Application/helpers';
import {
  IFindUserByCompanyIdUseCase,
  FindUserByCompanyIdUseCaseRequestDTO,
} from '@/core/usecases/user/find_by_company_id';
import { HttpResponse, Validation } from '@/Application/protocols';
import { NotFoundError } from '@/Application/errors';
export class FindUserByCompanyIdController {
  constructor(
    private readonly findUserByCompanyIdUseCase: IFindUserByCompanyIdUseCase,
    private readonly findUserByCompanyIdValidation: Validation
  ) {}

  async handle(request: FindUserByCompanyIdUseCaseRequestDTO): Promise<HttpResponse> {
    try {
      const error = await this.findUserByCompanyIdValidation.validate(request);
      if (error instanceof NotFoundError) return notFound(error);
      if (error instanceof Error) return badRequest(error);
      const user = await this.findUserByCompanyIdUseCase.execute(request);
      return ok(user);
    } catch (error) {
      return serverError(error);
    }
  }
}
