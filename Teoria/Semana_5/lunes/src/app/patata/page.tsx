'use client'; 

import Link from "next/link";
import { useRouter } from "next/navigation";

const pruebaPatata =() => {

    const router = useRouter();

    return(
        <div>
            <h1>Pagina de la ruta patata</h1>
            <Link href="/">Ruta inicio</Link>
            <br />
        <button onClick={() => 
            router.push("/")}
            >Te lleva a patata con un boton</button>
            <button onClick={() => 
            router.back()}
            >Te lleva a patata con un boton</button>
        
        </div>
    )
} 

export default pruebaPatata;