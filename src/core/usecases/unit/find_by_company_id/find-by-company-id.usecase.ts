import { IFindByCompanyIdUnitRepository } from '../../../repositories/unit';
import {
  FindUnitByCompanyIdUseCaseRequestDTO,
  FindUnitByCompanyIdUseCaseResponseDTO,
  IFindUnitByCompanyIdUseCase,
} from './';
export class FindUnitByCompanyIdUseCase implements IFindUnitByCompanyIdUseCase {
  constructor(private readonly unitRepository: IFindByCompanyIdUnitRepository) {}
  async execute({
    companyId,
  }: FindUnitByCompanyIdUseCaseRequestDTO): Promise<FindUnitByCompanyIdUseCaseResponseDTO[]> {
    const units = await this.unitRepository.findByCompanyId(companyId);
    return units.map((unit) => ({
      id: unit._id!,
      name: unit.name,
      companyId: unit.companyId,
      address: unit.address,
    }));
  }
}
