import { badRequest, serverError, created } from '@/Application/helpers';
import { ICreateCompanyUseCase, CreateCompanyUseCaseRequestDTO } from '@/core/usecases/company/create';
import { HttpResponse, Validation } from '@/Application/protocols';

export class CreateCompanyController {
  constructor(
    private readonly createCompanyUseCase: ICreateCompanyUseCase,
    private readonly createCompanyValidation: Validation
  ) {}

  async handle(request: CreateCompanyUseCaseRequestDTO): Promise<HttpResponse> {
    try {
      const error = await this.createCompanyValidation.validate(request);
      if (error instanceof Error) return badRequest(error);
      let company = await this.createCompanyUseCase.execute(request);
      return created(company);
    } catch (error) {
      return serverError(error);
    }
  }
}
