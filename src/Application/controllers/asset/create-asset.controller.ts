import { badRequest, serverError, created, notFound } from '@/Application/helpers';
import { ICreateAssetUseCase, CreateAssetUseCaseRequestDTO } from '@/core/usecases/asset/create/';
import { HttpResponse, Validation } from '@/Application/protocols';
import { NotFoundError } from '@/Application/errors';
export class CreateAssetController {
  constructor(
    private readonly createAssetUseCase: ICreateAssetUseCase,
    private readonly createAssetValidation: Validation
  ) {}

  async handle(request: CreateAssetUseCaseRequestDTO): Promise<HttpResponse> {
    try {
      if (request.file) {
        request.imageUrl = `http://localhost:${process.env.PORT}/asset/` + request.file.filename;
        delete request.file;
      }
      const error = await this.createAssetValidation.validate(request);
      if (error instanceof NotFoundError) return notFound(error);
      if (error) return badRequest(error);
      let asset = await this.createAssetUseCase.execute(request);
      return created(asset);
    } catch (error) {
      return serverError(error);
    }
  }
}
