import { CreateUnitUseCaseRequestDTO, CreateUnitUseCaseResponseDTO } from './dto';

export interface ICreateUnitUseCase {
  execute(createDtoRequest: CreateUnitUseCaseRequestDTO): Promise<CreateUnitUseCaseResponseDTO>;
}
