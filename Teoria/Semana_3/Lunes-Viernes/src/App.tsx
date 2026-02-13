import { useState } from 'react';
import './App.css';
import type { CharacterT} from './types';
import { Character }from './components/Character';

const App = () => {
  const [character, setCharacter] = useState<CharacterT | null>(null);
  const [id, setId] = useState<number>(1);

  return (
    <>
    <div>
      <p>El id escrito es: {id}</p>
      <input value = {id}
      onChange={ (e) => {setId(Number(e.target.value))}}></input> {/* para meter textos */}
    </div>
    <Character id={id}/>
   </>
  )
}

export default App;