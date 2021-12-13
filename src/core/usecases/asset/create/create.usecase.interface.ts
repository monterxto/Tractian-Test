import { CreateAssetUseCaseRequestDTO, CreateAssetUseCaseResponseDTO } from './dto';

export interface ICreateAssetUseCase {
  execute(createDtoRequest: CreateAssetUseCaseRequestDTO): Promise<CreateAssetUseCaseResponseDTO>;
}
