import {
  makeDbFindUnitById,
  makeDbFindAssetByUnitId,
} from '@/main/factories/infra/repositories/mongodb';
import {
  IFindUnitByIdWithAssetsUseCase,
  FindUnitByIdWithAssetsUseCase,
} from '@/core/usecases/unit/find_by_id_with_assets';

export const makeFindUnitByIdWithAssetsUseCase = (): IFindUnitByIdWithAssetsUseCase => {
  return new FindUnitByIdWithAssetsUseCase(makeDbFindUnitById(), makeDbFindAssetByUnitId());
};
