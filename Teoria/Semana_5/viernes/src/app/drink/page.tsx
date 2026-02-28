'use client'

import { getCocktailsByName } from "@/lib/api/cocktail";
import { Drink } from "@/types";
import { AxiosError } from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const drinks = () => {

    const serachParams = useSearchParams();
    const name = serachParams.get("name");

    const [drink, setDrink] = useState<Drink[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<Boolean>(true);


    useEffect(()=> {
        if (name) {
            getCocktailsByName(name).then ((res : any) => {
                setDrink(res.data.drinks);
            }).catch((err : AxiosError) => {
                setError(err.message);
            }).finally(() => {
                setLoading(false);
            })
        }
    })
      
    return (
        <div>
            {loading && <h2>Loading...</h2>}
            {error && <h3>Error: {error}</h3>}
            {!loading && !error && drink.length > 0 && 
            drink.map((d : any) => <p key={d.id}>{d.strDrink}</p>)}
            <h1>
                Pagina drinks
            </h1>
            <p>Nombre de los cocktail: {name}</p>
            
        </div>
    )
}

export default drinks;