import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import {api} from "./api/api";

const App = () => {

  const [palabra, setPalabra] = useState<string>("");

  useEffect(() => {
    api.get("/character").then ((e) => console.log(e.data));
  }, []) //Si se le pasa una variable de estado en el [] se volvera a ejecutar cada vez que se actualiza el estado

  return (

    <div>
      <p>La palabra escrita es: {palabra}</p>
      <input onChange={ (e) => {setPalabra(e.target.value)}}></input> {/* para meter textos */}
    </div>

  )
}

export default App;