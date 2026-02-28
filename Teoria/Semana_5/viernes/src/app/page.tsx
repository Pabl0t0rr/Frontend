'use client'

import { getCocktailsByName } from "@/lib/api/cocktail";
import { Drink } from "@/types";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Home = () => {

  //Para el buscador
  const [name, setName] = useState<string>("");
  const [finalName, setFinalName] = useState<string>("");

  //Para las rutas
  const router = useRouter();

  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {

    if(!finalName) return; //Para evitar hacer una llamada a la API
    //Inicializar estados
    setLoading(true);
    setError(null);

    getCocktailsByName(finalName).then((d)=> {
      setDrinks(d.drinks);
    }).catch((err : AxiosError) => {
      setError(err.message);
    }).finally(() => {
      setLoading(false);
    })
  
  }, [finalName]);


  return (
    <div>
      <h1>Buscador de cócteles</h1>
        <div>
          <input onChange={(n) => setName(n.target.value)}></input>
          <button onClick={() => {
            setFinalName(name)
          }}>Buscar coctel</button>

        </div>
     {loading && <h2> Loading...</h2>}
     {error && <h2> Error: {error}</h2>}

     <div>
      {!loading && !error && drinks.length > 0 && 
      drinks.map((drinks) => {
        return (
          <>
            <div className="mainContainer">
              <button onClick={() => {
                router.push("/drink/"+ drinks.idDrink)
              }}>
                {drinks?.strDrinkThumb && <img src = {drinks.strDrinkThumb}></img>}
                <div className="characterDataContainer">
                  <p>Name: {drinks?.strDrink}</p>
                  <p>Category: {drinks?.strCategory}</p>
                  <p>Glass: {drinks?.strGlass}</p>

                </div>
              </button>
              <div key = {drinks.idDrink}></div>
            </div>
          </>
        )
      })}
     </div>

    </div>
  )

}

export default Home;