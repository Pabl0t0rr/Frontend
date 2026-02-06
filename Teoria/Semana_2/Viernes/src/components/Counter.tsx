import { useState } from "react";


const Counter = () => {
     const [contador, setContador] = useState<number>(0) // Para null = useState <number | null> (null)
    
     return (<div>
            <p> EL contador tiene un valor {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar contador</button>     
        </div>);
}

export default Counter;