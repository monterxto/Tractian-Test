import { serverError, ok } from '@/Application/helpers';
import { IFindAllUserUseCase } from '@/core/usecases/user/find_all';
import { HttpResponse } from '@/Application/protocols';
export class FindAllUserController {
  constructor(private readonly findAllUserUseCase: IFindAllUserUseCase) {}

  async handle(): Promise<HttpResponse> {
    try {
      const user = await this.findAllUserUseCase.execute();
      return ok(user);
    } catch (error) {
      return serverError(error);
    }
  }
}
