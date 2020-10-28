import { Router } from 'express';

import FindTrajetoService from '../services/FindTrajetoService';

const trajetosRouter = Router();

trajetosRouter.get('/', async (req, res) => {
  const { codigo } = req.body;

  const findTrajetos = new FindTrajetoService();

  try {
    const trajetos = await findTrajetos.execute(codigo);
    return res.json(trajetos);
  } catch (error) {
    return res.status(400).send();
  }
});

export default trajetosRouter;
