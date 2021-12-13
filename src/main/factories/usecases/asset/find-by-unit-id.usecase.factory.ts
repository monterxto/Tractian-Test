import { makeDbFindAssetByUnitId } from '@/main/factories/infra/repositories/mongodb';
import {
  IFindAssetByUnitIdUseCase,
  FindAssetByUnitIdUseCase,
} from '@/core/usecases/asset/find_by_unit_id';

export const makeFindAssetByUnitIdUseCase = (): IFindAssetByUnitIdUseCase => {
  return new FindAssetByUnitIdUseCase(makeDbFindAssetByUnitId());
};
