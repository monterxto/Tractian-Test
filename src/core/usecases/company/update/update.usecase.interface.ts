import { CompanyIdRequestDto, UpdateCompanyUseCaseRequestDTO } from './';

export interface IUpdateCompanyUseCase {
  execute(
    { id }: CompanyIdRequestDto,
    updateDtoRequest: Partial<UpdateCompanyUseCaseRequestDTO>
  ): Promise<void | Error>;
}
