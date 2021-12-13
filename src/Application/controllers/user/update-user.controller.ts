import { serverError, noContent, badRequest, notFound } from "@/Application/helpers";
import {
  IUpdateUserUseCase,
  UpdateUserUseCaseRequestDTO,
  UserIdRequestDto,
} from "@/core/usecases/user/update";
import { HttpResponse, Validation } from "@/Application/protocols";
import { NotFoundError, InvalidParamError } from "@/core/errors";

export class UpdateUserController {
  constructor(
    private readonly updateUserUseCase: IUpdateUserUseCase,
    private readonly updateUserValidation: Validation
  ) {}

  async handle(
    request: UpdateUserUseCaseRequestDTO & UserIdRequestDto
  ): Promise<HttpResponse> {
    try {
      const error = await this.updateUserValidation.validate(request);
      if (error instanceof NotFoundError) return notFound(error)
      if (error instanceof Error) return badRequest(error);
      const result = await this.updateUserUseCase.execute(
        { id: request.id },
        request
      );
      if (result instanceof NotFoundError) return notFound(result)
      if (result instanceof InvalidParamError ) return badRequest(result)
      return noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}