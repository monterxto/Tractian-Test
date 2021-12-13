import { serverError, ok, notFound } from '@/Application/helpers';
import {
  IFindCompanyByIdUseCase,
  FindCompanyByIdUseCaseRequestDTO,
} from '@/core/usecases/company/find_by_id';
import { HttpResponse } from '@/Application/protocols';
import { NotFoundError } from '@/core/errors';

export class FindCompanyByIdController {
  constructor(private readonly findCompanyByIdUseCase: IFindCompanyByIdUseCase) {}

  async handle(request: FindCompanyByIdUseCaseRequestDTO): Promise<HttpResponse> {
    try {
      const company = await this.findCompanyByIdUseCase.execute(request);
      if (company instanceof NotFoundError) return notFound(company);
      return ok(company);
    } catch (error) {
      return serverError(error);
    }
  }
}
