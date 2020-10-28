import { Router } from 'express';

import trajetosRouter from './trajetos.routes';

const routes = Router();

routes.use('/trajetos', trajetosRouter);

export default routes;
