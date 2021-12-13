import { UpdateAssetUseCaseRequestDTO } from '@/core/usecases/asset/update/dto';

export interface IUpdateAssetRepository {
  update(id: string, updateDtoRequest: Partial<UpdateAssetUseCaseRequestDTO>): Promise<void>;
}
