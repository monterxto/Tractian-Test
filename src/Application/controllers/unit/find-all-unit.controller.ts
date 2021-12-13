import { serverError, ok } from '@/Application/helpers';
import { IFindAllUnitUseCase } from '@/core/usecases/unit/find_all';
import { HttpResponse } from '@/Application/protocols';
export class FindAllUnitController {
  constructor(private readonly findAllUnitUseCase: IFindAllUnitUseCase) {}

  async handle(): Promise<HttpResponse> {
    try {
      const units = await this.findAllUnitUseCase.execute();
      return ok(units);
    } catch (error) {
      return serverError(error);
    }
  }
}
