import { Router } from 'express';
import {
  makeCreateUnitController,
  makeFindAllUnitController,
  makeFindUnitByIdController,
  makeUpdateUnitController,
  makeDeleteUnitController,
  makefindUnitByIdWithAssetsController,
  makeFindUnitByCompanyIdController,
} from '@/main/factories/application/controllers/unit';
import { adaptRoute } from '@/adapter/Application';

export default (router: Router): void => {
  router.post('/units', adaptRoute(makeCreateUnitController()));
  router.get('/units', adaptRoute(makeFindAllUnitController()));
  router.get('/units/:id', adaptRoute(makeFindUnitByIdController()));
  router.get('/units/company/:companyId', adaptRoute(makeFindUnitByCompanyIdController()));
  router.get('/units/withassets/:id', adaptRoute(makefindUnitByIdWithAssetsController()));
  router.patch('/units/:id', adaptRoute(makeUpdateUnitController()));
  router.delete('/units/:id', adaptRoute(makeDeleteUnitController()));
};
