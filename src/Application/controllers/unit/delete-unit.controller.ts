import { serverError, noContent } from '@/Application/helpers';
import { IDeleteUnitUseCase, UnitIdRequestDto } from '@/core/usecases/unit/delete';
import { HttpResponse } from '@/Application/protocols';

export class DeleteUnitController {
  constructor(private readonly deleteUnitUseCase: IDeleteUnitUseCase) {}

  async handle(request: UnitIdRequestDto): Promise<HttpResponse> {
    try {
      await this.deleteUnitUseCase.execute(request);
      return noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}
