'use client';

import "./product.css";
import { Comprar } from "../page";

type Props = {
    lista : Comprar[];
    setLista: React.Dispatch<React.SetStateAction<Comprar[]>>; //Para tipar las funciones
    name: string;
}

const Product = ({lista, setLista, name}: Props) => {

    
    return (
        <div className="productos" onClick={() => {
                setLista([...lista, {name: name, id: String(Math.random())}])
            }}>
            <h1>{name.toUpperCase()}</h1>
            
        </div>
    )
}

export default Product;