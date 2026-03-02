'use client'; //Necesario para usar hooks en componentes de cliente

import { useRouter } from "next/navigation"; //Importar el nuevo
import { useState } from "react";
import "./page.css";
import Product from "./components/product";

const Home = () => {

  const router = useRouter(); //Si empieza por "use" son hooks
  const [lista, setLista] = useState<string[] >([]);

  const productos = ["Manzana", "Pera", "Naranja", "Banana"];

  return (
    <div className="page">
      <div>
        {lista.map((e) => {
          return <h2>Lista de la compra: {e}</h2>
        })}
      </div>
      {productos.map((e) => {
        return <Product name={e} lista={lista} setLista={setLista}/>
      })}
     
    </div>
  );
}

export default Home;