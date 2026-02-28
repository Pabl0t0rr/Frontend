'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCocktailsByName } from "@/lib/api/cocktail";

const Home = () => {

  const [palabra, setPalabra] = useState<string>("")
  const [busqueda, setBuscador] = useState<string>("")
    
  const router = useRouter();

  useEffect(() => {
    getCocktailsByName(palabra);
  }, [busqueda])

 return (
         <div>
           <p>Escriba el nombre del cocktail que quiera buscar</p>
           <input onChange={(n) => {setPalabra(n.target.value)}}></input>
           <button onClick={() => {{/*Btn para ir a la siguiente ventana*/}
              setBuscador(palabra)
             router.push("/drink")
            }}>Buscar Cocktail</button>

            <p>Cocktail buscado: {busqueda}</p> 
 
         </div>
       )
}

export default Home;