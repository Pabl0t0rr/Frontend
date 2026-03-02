'use client'; //Necesario para usar hooks en componentes de cliente

import { useRouter } from "next/navigation"; //Importar el nuevo
import { useState } from "react";
import "./page.css";
import Product from "./components/product";

export type Comprar = {
    name: string;
    id: string;
  }

const Home = () => {

  
  const router = useRouter(); //Si empieza por "use" son hooks
  const [lista, setLista] = useState<Comprar[] >([]);

  const productos = ["Manzana", "Pera", "Naranja", "Banana"];

  return (
    <div className="page">
      <div>
        {lista.map((p) => {
          return <h2 key = {p.id}>Lista de la compra: {p.name}</h2>
        })}
      </div>
      {productos.map((e) => {
        return <Product key = {e} name={e} lista={lista} setLista={setLista}/>
      })}
     
    </div>
  );
}

export default Home;