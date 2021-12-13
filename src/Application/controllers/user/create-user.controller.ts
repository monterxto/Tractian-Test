import { badRequest, serverError, created, notFound } from '@/Application/helpers';
import { ICreateUserUseCase, CreateUserUseCaseRequestDTO } from '@/core/usecases/user/create';
import { HttpResponse, Validation } from '@/Application/protocols';
import { NotFoundError } from '@/Application/errors';

export class CreateUserController {
  constructor(
    private readonly createUserUseCase: ICreateUserUseCase,
    private readonly createUserValidation: Validation
  ) {}

  async handle(request: CreateUserUseCaseRequestDTO): Promise<HttpResponse> {
    try {
      const error = await this.createUserValidation.validate(request);
      if (error instanceof NotFoundError) return notFound(error);
      if (error instanceof Error) return badRequest(error);
      let user = await this.createUserUseCase.execute(request);
      return created(user);
    } catch (error) {
      return serverError(error);
    }
  }
}
