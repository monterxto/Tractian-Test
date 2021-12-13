import { Controller } from '@/Application/protocols';
import { DeleteUnitController } from '@/Application/controllers/unit';
import { makeDeleteUnitUseCase } from '@/main/factories/usecases/unit';

export const makeDeleteUnitController = (): Controller => {
  const deleteUnitUseCase = makeDeleteUnitUseCase();
  return new DeleteUnitController(deleteUnitUseCase);
};
