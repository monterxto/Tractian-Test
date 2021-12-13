import { Router } from 'express';
import {
  makeCreateCompanyController,
  makeFindAllCompanyController,
  makeFindCompanyByIdController,
  makeUpdateCompanyController,
  makeDeleteCompanyController,
} from '@/main/factories/application/controllers/company';
import { adaptRoute } from '@/adapter/Application';

export default (router: Router): void => {
  router.post('/companies', adaptRoute(makeCreateCompanyController()));
  router.get('/companies', adaptRoute(makeFindAllCompanyController()));
  router.get('/companies/:id', adaptRoute(makeFindCompanyByIdController()));
  router.patch('/companies/:id', adaptRoute(makeUpdateCompanyController()));
  router.delete('/companies/:id', adaptRoute(makeDeleteCompanyController()));
};
