import { serverError, noContent } from '@/Application/helpers';
import { IDeleteCompanyUseCase, CompanyIdRequestDto } from '@/core/usecases/company/delete';
import { HttpResponse } from '@/Application/protocols';

export class DeleteCompanyController {
  constructor(private readonly deleteCompanyUseCase: IDeleteCompanyUseCase) {}

  async handle(request: CompanyIdRequestDto): Promise<HttpResponse> {
    try {
      await this.deleteCompanyUseCase.execute(request);
      return noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}
