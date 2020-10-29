import React, { useState } from 'react';

import api from '../../services/api.js';

import './styles.css';

interface Trajeto {
  id: string;
  local: string;
  created_at: string;
  updated_at: string;
  encomenda_id: string;
}

export default function Main() {
  const [trajetos, setTrajetos] = useState<Trajeto[]>([]);
  const [produto, setProduto] = useState('');

  async function loadTrajetos() {
    // eslint-disable-next-line no-restricted-globals
    event?.preventDefault();

    const { data } = await api.get(`trajetos/${produto}`);

    setTrajetos(data);
  }

  return (
    <div id="main">
      <div id="busca">
        <form onSubmit={loadTrajetos}>
          <input
            type="text"
            placeholder="Código de rastreio:"
            value={produto}
            onChange={e => setProduto(e.target.value)}
          />
          <button type="submit">Rastrear</button>
        </form>
      </div>
      <div id="trajetos">
        {trajetos.map(trajeto => (
          <div id="dados">
            <p className="codigo" key={trajeto.id}>
              {trajeto.encomenda_id}
            </p>
            <p>{trajeto.local}</p>
            <p>{trajeto.updated_at}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
