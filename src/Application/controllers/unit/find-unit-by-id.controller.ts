import { serverError, ok, notFound, badRequest } from "@/Application/helpers";
import {
  IFindUnitByIdUseCase,
  FindUnitByIdUseCaseRequestDTO,
} from "@/core/usecases/unit/find_by_id";
import { HttpResponse, Validation } from '@/Application/protocols';
import { NotFoundError } from "@/core/errors";

export class FindUnitByIdController {
  constructor(private readonly findUnitByIdUseCase: IFindUnitByIdUseCase,
    private readonly findUnitByIdValidation: Validation) {}

  async handle(request: FindUnitByIdUseCaseRequestDTO): Promise<HttpResponse> {
    try {
      const error = await this.findUnitByIdValidation.validate(request);
      if (error instanceof Error) return badRequest(error);
      const unit = await this.findUnitByIdUseCase.execute(request);
      if (unit instanceof NotFoundError) return notFound(unit);
      return ok(unit);
    }
    catch (error) {
      return serverError(error);
    }
  }
}