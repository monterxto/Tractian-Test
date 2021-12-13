import { Router } from 'express';
import {
  makeCreateUserController,
  makeFindAllUserController,
  makeFindUserByIdController,
  makeUpdateUserController,
  makeDeleteUserController,
  makeFindUserByCompanyIdController,
} from '@/main/factories/application/controllers/user';
import { adaptRoute } from '@/adapter/Application';

export default (router: Router): void => {
  router.post('/users', adaptRoute(makeCreateUserController()));
  router.get('/users', adaptRoute(makeFindAllUserController()));
  router.get('/users/:id', adaptRoute(makeFindUserByIdController()));
  router.get('/users/company/:companyId', adaptRoute(makeFindUserByCompanyIdController()));
  router.patch('/users/:id', adaptRoute(makeUpdateUserController()));
  router.delete('/users/:id', adaptRoute(makeDeleteUserController()));
};
