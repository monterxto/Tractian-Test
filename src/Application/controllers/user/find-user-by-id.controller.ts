import { serverError, ok, notFound, badRequest } from '@/Application/helpers';
import {
  IFindUserByIdUseCase,
  FindUserByIdUseCaseRequestDTO,
} from '@/core/usecases/user/find_by_id';
import { HttpResponse } from '@/Application/protocols';
import { NotFoundError } from '@/core/errors';

export class FindUserByIdController {
  constructor(private readonly findUserByIdUseCase: IFindUserByIdUseCase) {}

  async handle(request: FindUserByIdUseCaseRequestDTO): Promise<HttpResponse> {
    try {
      const user = await this.findUserByIdUseCase.execute(request);
      if (user instanceof NotFoundError) return notFound(user);
      return ok(user);
    } catch (error) {
      return serverError(error);
    }
  }
}
