import { Unit } from '../../../entities/unit.entity';
import { ICreateUnitRepository } from '../../../repositories/unit';
import { CreateUnitUseCaseRequestDTO, CreateUnitUseCaseResponseDTO, ICreateUnitUseCase } from './';

export class CreateUnitUseCase implements ICreateUnitUseCase {
  constructor(private readonly unitRepository: ICreateUnitRepository) {}

  async execute(
    createDtoRequest: CreateUnitUseCaseRequestDTO
  ): Promise<CreateUnitUseCaseResponseDTO> {
    const unitEntity = new Unit(
      createDtoRequest.name,
      createDtoRequest.companyId,
      createDtoRequest.address
    );
    const unitCreated = await this.unitRepository.create(unitEntity);
    return {
      id: unitCreated._id!,
      name: unitCreated.name,
      companyId: unitCreated.companyId,
      address: unitCreated.address,
    };
  }
}
