"use client";

import ContainerBackHome from "./components/ContainerBackHome";
import { useState } from "react";

const Home = () => {
  const [pulsado, setPulsado] = useState(true);
  return (
    <div onClick={() => setPulsado(false)}>
      <h1>Página de Inicio</h1>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setPulsado(true);
        }}
      >
        Mostrar el contenedor
      </button>
      <div>
        {pulsado && (
          <ContainerBackHome setPulsado={setPulsado}>
            <h1>Titulo dentro del contenedor</h1>
            <p>Texto dentro del contenedor</p>
          </ContainerBackHome>
        )}
      </div>
    </div>
  );
};

export default Home;
