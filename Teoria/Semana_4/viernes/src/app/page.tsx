'use client'; //Necesario para usar hooks en componentes de cliente

import Link from "next/link";
import { useRouter } from "next/navigation"; //Importar el nuevo

const Home = () => {

  const router = useRouter(); //Si empieza por "use" son hooks

  return (
    <div>
      <h1>Pagina ruta principal</h1>
      <Link href="/patata">Te lleva a patata</Link>
      <br />
      <button onClick={() => 
        router.push("/patata")}
        >Te lleva a patata con un boton</button>
      <button onClick={() => 
        router.replace("/patata")}
        >Te lleva a patata con un boton pero sin historial</button>
    </div>
  );
}

export default Home;