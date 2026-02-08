import { useState } from 'react';
import './App.css'
import Sum from './components/Sum';
import Subtraction from './components/Subtraction';
import Divide from './components/Divide';
import Multiply from './components/Multiply';


const App = () => {
const [valor1, setValor1] = useState<number>(0) // Para null = useState <number | null> (null)
const [valor2, setValor2] = useState<number>(0) // Para null = useState <number | null> (null)
const [result, setResult] = useState<number>(0) // Para null = useState <number | null> (null)
const [operation, setOperation] = useState<string>("") // Para null = useState <string | null> (null)

const setValor = (n : number) =>{
  
  if(valor1 === 0){
    setValor1(n)
    return;
  }
  if (valor2 === 0){
    setValor2(n);
    return;
  }
    //Para resetear los valores
  if(operation === "=" || result !== null){
    setValor1(0);
    setValor2(0);
    setResult(0);
    setOperation("");
    return;
  }
}

const calcular = () => {
  switch(operation){
    case "+":
      setResult(Sum(valor1, valor2))
      break;
    case "-":
      setResult(Subtraction(valor1, valor2))
      break;
    case "/":
      setResult(Divide(valor1, valor2))
      break;
    case "*":
      setResult(Multiply(valor1, valor2))
      break;       
    default:
      return;
  }
    
  
}
  return (<div> {/* Pantalla principal */}
            <h1>Calculator</h1>
            <p> Operacion:  {valor1} {operation} {valor2} = {result} </p>
              <div className = "button-panel"> {/* Pantalla para englobar los botones */}
                  <div className = "number-buttons"> {/*Botones de los numeros */}
                    <button onClick={() => setValor(1)}> 1 </button>
                    <button onClick={() => setValor(2)}> 2 </button>
                    <button onClick={() => setValor(3)}> 3 </button>
                    <button onClick={() => setValor(4)}> 4 </button>
                    <button onClick={() => setValor(5)}> 5 </button>
                    <button onClick={() => setValor(6)}> 6 </button>
                    <button onClick={() => setValor(7)}> 7 </button>
                    <button onClick={() => setValor(8)}> 8 </button>
                    <button onClick={() => setValor(9)}> 9 </button>
                  </div>

                  <div className = "operation-buttons"> {/* Botones de las operaciones */}
                    <button onClick={() => setOperation("+")}> + </button>
                    <button onClick= {() => setOperation("-")}> - </button>
                    <button onClick= {() => setOperation("/")}> / </button>
                    <button onClick= {() => setOperation("*")}> * </button>
                    <button onClick={calcular}> = </button>
                  </div>
              </div> 
          </div>);
};


export default App
