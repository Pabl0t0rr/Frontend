import { useEffect, useState } from "react";
import { api } from "./api/api";

const App = () => {

  //Creacion estdos para guardar los valores
  const [palabra, setPalabra] = useState<string>("");
  const [busqueda , setBusqueda] = useState<string>("/character") //Le daremos estado character para que no salte error al iniciar la app

  //Creacio USeEffect para no mostrar reitarada mente el contenido obtenido
  useEffect(()=> {
    api.get(busqueda).then((e) => console.log(e.data))
  }, [busqueda])
  return (
    <div>
      <h1>Hola Mundo</h1>
      <p>Contenido  buscar: 
        <input onChange={(c) => {setPalabra(c.target.value)}}></input>
        <button onClick={() => setBusqueda(palabra)}>Buscar</button>
      </p>
      
      <p>Parametro buscado: {busqueda}</p>
    </div>
  )
}

export default App;
