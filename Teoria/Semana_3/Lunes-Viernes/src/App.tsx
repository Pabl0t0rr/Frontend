import { useState } from 'react';
import './App.css';
import type { CharacterT} from './types';
import { CharacterById, CharacterByName }from './components/Character';

const App = () => {
  const [id, setId] = useState<number>(1);
  const [finalId, setFinalId] = useState<number | undefined>(undefined);

  const [nombre, setNombre] = useState<string>("");
  const [palabraFinal, setPalabraFinal] = useState<string>("");

  const [characters,setCharacters] = useState<CharacterT[]>([]);

  return (
    <>
    <div>
      <p>El id escrito es: {id}</p>
      <input value = {id}
      onChange={ (e) => {setId(Number(e.target.value))}}></input> {/* para meter textos */}
      <button onClick={() => setFinalId(id)}>Buscar por Id</button>
      <CharacterById id = {finalId} />
    </div>

    <div>
      <p>El nombre escrito es: {palabraFinal}</p>
      <input value = {palabraFinal}
      onChange={ (e) => {setPalabraFinal(e.target.value)}}></input>
      <button onClick={() => setPalabraFinal(palabraFinal)}>Buscar por Nombre</button>

      {characters.map((e) => (
        <CharacterByName key={e.id} character={e} />
      ))}
    </div>
     
   </>
  )
}

export default App;