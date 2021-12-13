import { Controller } from '@/Application/protocols';
import { FindAllUnitController } from '@/Application/controllers/unit';
import { makeFindAllUnitUseCase } from '@/main/factories/usecases/unit';

export const makeFindAllUnitController = (): Controller => {
  const findAllUnitUseCase = makeFindAllUnitUseCase();
  return new FindAllUnitController(findAllUnitUseCase);
};
