'use client'

import { getCocktailById} from "@/lib/api/cocktail";
import { Drink } from "@/types";
import { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const getId = () => {

    const {id} = useParams();

    const router = useRouter();

    const [cocktail, setCocktail] = useState<Drink | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null> (null);

    

    useEffect(() => {

        getCocktailById(Number(id)).then ( (res : any) => {
            setCocktail(res.drinks[0]);
        }).catch((err: AxiosError) => {
            setError(err.message);
        }).finally(() => {
            setLoading(false);
        })
    },  [id])


    return (
         <div>
            <h1>Recibiendo el id: {id}</h1>
            <p> Nombre : {cocktail?.strDrink}</p>
            {!cocktail && loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && cocktail && (
                <>
                    <img src ={cocktail.strDrinkThumb}></img>
                    <p>Nombre: {cocktail?.strDrink}</p>
              
                </>
            ) }           

            <button onClick={()=> router.back()}>Volver</button>
        </div>

    )
};

export default getId;