import { IFindUnitByIdRepository } from '@/core/repositories/unit';
import {
  FindUnitByIdUseCaseRequestDTO,
  FindUnitByIdUseCaseResponseDTO,
  IFindUnitByIdUseCase,
} from './';
import { NotFoundError } from '@/core/errors';
export class FindUnitByIdUseCase implements IFindUnitByIdUseCase {
  constructor(private readonly unitRepository: IFindUnitByIdRepository) {}
  async execute({
    id,
  }: FindUnitByIdUseCaseRequestDTO): Promise<FindUnitByIdUseCaseResponseDTO | Error> {
    const unit = await this.unitRepository.findById(id);
    if (!unit) return new NotFoundError('Unit not found');
    return {
      id: unit._id!,
      name: unit.name,
      companyId: unit.companyId,
      address: unit.address,
    };
  }
}
