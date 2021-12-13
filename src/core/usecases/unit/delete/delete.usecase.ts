import { IFindUnitByIdRepository, IDeleteUnitRepository } from '@/core/repositories/unit';
import { UnitIdRequestDto, IDeleteUnitUseCase } from './';

export class DeleteUnitUseCase implements IDeleteUnitUseCase {
  constructor(
    private readonly deleteRepository: IDeleteUnitRepository,
    private readonly findByIdRepository: IFindUnitByIdRepository
  ) {}

  async execute({ id }: UnitIdRequestDto): Promise<void> {
    const unitExists = await this.findByIdRepository.findById(id);
    if (!unitExists) return;
    await this.deleteRepository.delete(id);
  }
}
