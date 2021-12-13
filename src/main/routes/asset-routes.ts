import { adaptRoute } from '@/adapter/Application';
import {
  makeCreateAssetController,
  makeFindAllAssetController,
  makeFindAssetByIdController,
  makeFindAssetByUnitIdController,
  makeUpdateAssetController,
  makeDeleteAssetController,
} from '@/main/factories/application/controllers/asset';
import { upload } from '@/main/config/multer';
import { Router } from 'express';

export default (router: Router): void => {
  router.post('/assets', upload.single('image'), adaptRoute(makeCreateAssetController()));
  router.get('/assets', adaptRoute(makeFindAllAssetController()));
  router.get('/assets/:id', adaptRoute(makeFindAssetByIdController()));
  router.get('/assets/unit/:unitId', adaptRoute(makeFindAssetByUnitIdController()));
  router.patch('/assets/:id', adaptRoute(makeUpdateAssetController()));
  router.delete('/assets/:id', adaptRoute(makeDeleteAssetController()));
};
