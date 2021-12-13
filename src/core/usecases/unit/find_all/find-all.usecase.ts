import { IFindAllUnitRepository } from '@/core/repositories/unit';
import { FindAllUnitUseCaseResponseDTO, IFindAllUnitUseCase } from './';

export class FindAllUnitUseCase implements IFindAllUnitUseCase {
  constructor(private readonly unitRepository: IFindAllUnitRepository) {}
  async execute(): Promise<FindAllUnitUseCaseResponseDTO[]> {
    const units = await this.unitRepository.findAll();
    return units.map((unit) => ({
      id: unit._id!,
      name: unit.name,
      companyId: unit.companyId,
      address: unit.address,
    }));
  }
}
