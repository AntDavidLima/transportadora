import { Router } from 'express';

import FindTrajetoService from '../services/FindTrajetoService';

const trajetosRouter = Router();

trajetosRouter.get('/:id', async (req, res) => {
  const { id } = req.params;

  const findTrajetos = new FindTrajetoService();

  try {
    const trajetos = await findTrajetos.execute(id);
    return res.json(trajetos);
  } catch (error) {
    return res.status(400).send();
  }
});

export default trajetosRouter;
