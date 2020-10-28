import React, { useEffect, useState } from 'react';

import api from '../../services/api.js';

export default function Main() {
  const [trajetos, setTrajetos] = useState([]);

  useEffect(() => {
    async function loadTrajetos() {
      const { data } = await api.get(
        'trajetos/6caa2d4d-d603-4268-8552-ec91368fddfa',
      );

      setTrajetos(data);
    }
    console.log(trajetos);
    loadTrajetos();
  }, []);

  return <h1>Teste</h1>;
}
