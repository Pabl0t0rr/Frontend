'use client';

import "./product.css";

type Props = {
    lista : string [];
    setLista: React.Dispatch<React.SetStateAction<string[]>>; //Para tipar las funciones
    name: string;
}

const Product = ({lista, setLista, name}: Props) => {

    
    return (
        <div className="productos" onClick={() => {
                setLista([...lista, name])
            }}>
            <h1>{name.toUpperCase()}</h1>
            
        </div>
    )
}

export default Product;