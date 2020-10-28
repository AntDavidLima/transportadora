import { getRepository } from 'typeorm';

import Trajeto from '../models/Trajeto';
import Encomenda from '../models/Encomenda';

class FindTrajetoService {
  public async execute(codigo: string): Promise<Trajeto[]> {
    const trajetosRepository = getRepository(Trajeto);
    const encomendasRepository = getRepository(Encomenda);

    const checkProductExists = await encomendasRepository.findOne({
      where: { id: codigo },
    });

    if (!checkProductExists) {
      throw new Error('Este produto não existe!');
    }

    const trajetos = await trajetosRepository.find({
      where: { encomenda_id: codigo },
    });

    return trajetos;
  }
}

export default FindTrajetoService;
