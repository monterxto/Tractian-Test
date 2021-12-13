import { serverError, noContent } from '@/Application/helpers';
import { IDeleteUserUseCase, UserIdRequestDto } from '@/core/usecases/user/delete';
import { HttpResponse } from '@/Application/protocols';

export class DeleteUserController {
  constructor(private readonly deleteUserUseCase: IDeleteUserUseCase) {}

  async handle(request: UserIdRequestDto): Promise<HttpResponse> {
    try {
      await this.deleteUserUseCase.execute(request);
      return noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}
