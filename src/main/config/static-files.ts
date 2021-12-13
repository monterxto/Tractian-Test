import express, { Express } from 'express';
import { resolve } from 'path';

export default (app: Express): void => {
  app.use('/asset', express.static(resolve(__dirname, '../../../public/asset')));
};
