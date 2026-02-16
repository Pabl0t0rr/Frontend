import { useEffect, useState } from "react";
import { api } from "../../api/api";
import type { CharacterT } from "../../types";
import "./style.css";

export const CharacterById = (params : {id ?: number, character ?: CharacterT}) => {

    const id = params.id;

    const [personaje, setPersonaje] = useState<CharacterT | null>(null);

  useEffect(() => {
    !params.character && id && api.get(`/character/${id}`).then ((e) => setPersonaje(e.data));
  }, [id]) //Si se le pasa una variable de estado en el [] se volvera a ejecutar cada vez que se actualiza el [id]

    return (
        <>
        {personaje ? <div className = "mainContainer">
            {personaje?.image && <img src={personaje?.image}/>}
            <div className="characterContainer">
                <h2>{personaje?.name}</h2>
                <p>Status: {personaje?.status}</p>
                <p>Species: {personaje?.species}</p>
                <p>Type: {personaje?.type}</p>
            </div>
        </div> : <h1>LOADING...</h1>}
        </>
    )
}


export const CharacterByName = (params : {name ?: string, character ?: CharacterT}) => {

    const name = params.name;

    const [personaje, setPersonaje] = useState<CharacterT | null>(null);

    useEffect(() => {
         !params.character && name && api.get(`/character/${name ? "?name=" + name : ""}`)
         .then ((e) => setPersonaje(e.data.results));
    }, [name])

    return (
        <>
        {personaje ? <div className = "mainContainer">
            {personaje?.image && <img src={personaje?.image}/>}
            <div className="characterContainer">
                <h2>{personaje?.name}</h2>
                <p>Status: {personaje?.status}</p>
                <p>Species: {personaje?.species}</p>
                <p>Type: {personaje?.type}</p>
            </div>
        </div> : <h1>LOADING...</h1>}
        </>
    )
}