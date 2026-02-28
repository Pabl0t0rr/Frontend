'use client'

import { getCocktailById} from "@/lib/api/cocktail";
import { Drink } from "@/types";
import { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const getId = () => {

    const {id} = useParams();

    const [cocktail, setCocktail] = useState<Drink | null>(null);
    const [loading, setLoading] = useState<Boolean>(true);
    const [error, setError] = useState<string | null> (null);

    const router = useRouter();

    useEffect(() => {
        getCocktailById(Number(id)).then ( (res : any) => {
            setCocktail(res);
        }).catch((err: AxiosError) => {
            setError(err.message);
        }).finally(() => {
            setLoading(false);
        })
    },  [id])


    return (
         <div>
            <h1>Recibiendo el id: {id}</h1>
            {!cocktail && loading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}
            
                <>
                <p>Nombre: {cocktail?.strDrink}</p>
                <p></p>
                </>
            

            <button onClick={()=> router.back()}>Volver</button>
        </div>

    )
};

export default getId;