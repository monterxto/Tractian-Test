import { IFindUnitByIdRepository, IUpdateUnitRepository } from '../../../repositories/unit';
import { UnitIdRequestDto, UpdateUnitUseCaseRequestDTO, IUpdateUnitUseCase } from './';
import { NotFoundError } from '@/core/errors/not-found-error';

export class UpdateUnitUseCase implements IUpdateUnitUseCase {
  constructor(
    private readonly updateRepository: IUpdateUnitRepository,
    private readonly findByIdRepository: IFindUnitByIdRepository
  ) {}

  async execute(
    { id }: UnitIdRequestDto,
    updateDtoRequest: Partial<UpdateUnitUseCaseRequestDTO>
  ): Promise<void | Error> {
    const unitExists = await this.findByIdRepository.findById(id);
    if (!unitExists) return new NotFoundError('Unit not found');
    await this.updateRepository.update(id, updateDtoRequest);
  }
}
