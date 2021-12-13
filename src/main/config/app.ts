import express, { Express } from 'express';
import setupMiddlewares from '@/main/config/middlewares';
import setupRoutes from '@/main/config/routes';
import setupStaticFiles from '@/main/config/static-files';

export const setupApp = async (): Promise<Express> => {
  const app = express();
  setupStaticFiles(app);
  setupMiddlewares(app);
  setupRoutes(app);
  return app;
};
