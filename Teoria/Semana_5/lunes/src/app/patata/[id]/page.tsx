'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CharacterT } from "@/types";
import { getCharcaterById } from "@/lib/api/character";
import { AxiosError } from "axios";



const recibirID = () => {

    const {id} = useParams()

    const [personaje, setPersonaje] = useState<CharacterT | null>(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        getCharcaterById(Number(id)).then ((res : any) => {
            setPersonaje(res)

        }).catch((err:AxiosError) => {
            setError(err.message)

        }).finally(() => {
            setLoading(false);
        })

    }, [id])

    return (
        <div>
            <h1>Recibiendo el id: {id}</h1>
            {!personaje && loading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}
            
                <>
                <p>Nombre: {personaje?.name}</p>
                </>
            
        </div>
    );
}

export default recibirID;