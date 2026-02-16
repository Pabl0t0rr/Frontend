
import { useEffect, useState } from "react";
import './App.css'
import { Character } from "./components/Character";
import type { CharacterT } from "./types";
import { api } from "./api/api";

const App = () => {
  const [characters, setCharacters] = useState<CharacterT[]>([]);
  const [name, setName] = useState<string>("");
  const [finalName, setFinalName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true); //Siempre lo iniciamos en true
  const [error, setError] = useState<string | null >(null);

  useEffect(() => {
    api.get(`/character/${finalName ? "?name=" + finalName : ""}`).then((e) => {
      setCharacters(e.data.results);
    }).catch((e) => {
      setError("Error cargando los personajes: " + e.message); //Mostrar el error
    }).finally(() => {
      setLoading(false); //Cnd acaba la conexion cambiar el valor del loading
    });
  }, [finalName]);

  return (
    <>
      <div className="mainContainer"> 
        <input value={name} onChange={(e) => { setName(e.target.value)}} />
        <button onClick={() => { setFinalName(name) }} > Search </button>
        {finalName && loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
      </div>
     
      <div className = "characterDataContainer">
        {characters.map((e) => (
        <Character key={e.id} character={e} />
        ))}
      </div>
      
    </>
  );
};

export default App