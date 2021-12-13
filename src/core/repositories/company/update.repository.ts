import {
  CompanyIdRequestDto,
  UpdateCompanyUseCaseRequestDTO,
} from '@/core/usecases/company/update/dto';

export interface IUpdateCompanyRepository {
  update(id: string, updateDtoRequest: Partial<UpdateCompanyUseCaseRequestDTO>): Promise<void>;
}
