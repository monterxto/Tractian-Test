import { serverError, ok } from '@/Application/helpers';
import { IFindAllCompanyUseCase } from '@/core/usecases/company/find_all';
import { HttpResponse } from '@/Application/protocols';
export class FindAllCompanyController {
  constructor(private readonly findAllCompanyUseCase: IFindAllCompanyUseCase) {}

  async handle(): Promise<HttpResponse> {
    try {
      const companys = await this.findAllCompanyUseCase.execute();
      return ok(companys);
    } catch (error) {
      return serverError(error);
    }
  }
}
