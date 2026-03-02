'use client';

type Props = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>; //Para tipar las funciones
}

const Counter = ({count, setCount}: Props) => {


return (
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(count - 1)}>Decrementar</button>
        </div>
    )
}

export default Counter;