import 'module-alias/register';
import { connectDb } from '@/infra/database/mongodb/database';
import { setupApp } from './config/app';

connectDb().then(async () => {
  const app = await setupApp();
  app.listen(process.env.PORT, () =>
    console.log(`Server running at http://localhost:${process.env.PORT}`)
  );
});
