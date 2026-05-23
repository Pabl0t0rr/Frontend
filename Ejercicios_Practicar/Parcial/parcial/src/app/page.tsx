'use client'

import { useState, useEffect } from 'react'
import { getAllPokemons, getPokemonByName } from '@/lib/api/pokemon'
import { PokemonT } from '@/types'
import PokemonC from './components/pokemonC'

import './page.css'
import { get } from 'http'

const Home = () => {
   const [palabra, setPalabra] = useState<string>('')
   const [palabraFinal, setPalabraFinal] = useState<string>('')

   const [pokemons, setPokemons] = useState<PokemonT[]>([])
   const [loading, setLoading] = useState<boolean>(true)
   const [error, setError] = useState<string | null>(null)

   //Para precargar todos los pokemons
   useEffect(() => {
      getAllPokemons()
         .then((p) => setPokemons(p))
         .catch((err) => setError(err.message))
         .finally(() => setLoading(false))
   }, [])

   //Para buscador de pokemons
   useEffect(() => {
      //Resetear valores para poder mostrar el error o el loading cada vez que se busque algo nuevo
      setError(null)
      setLoading(true)
      setPokemons([])

      //Para que te muestre todos de nuevo y buscas con el bucador vacio
      if (!palabraFinal) {
         getAllPokemons()
            .then((p) => setPokemons(p))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false))
         return
      }
      //Buscador con la palabra que escribes(tiene que ser identica)
      getPokemonByName(palabraFinal)
         .then((p) => setPokemons([p]))
         .catch((err) => setError(err.message))
         .finally(() => setLoading(false))
   }, [palabraFinal])

   return (
      <div>
         <div className="mainContainer">
            <h1>Pagina principal</h1>
            <input
               onChange={(p) => setPalabra(p.target.value)}
               onKeyDown={(p) => {
                  if (p.key === 'Enter') {
                     setPalabraFinal(palabra)
                  }
               }}
            />
            <button onClick={() => setPalabraFinal(palabra)}>Buscar pokemon</button>
         </div>

         {loading && <p>Cargando...</p>}
         {error && <p>Error: {error}</p>}

         <div className="pokemonContainer">
            {!loading &&
               !error &&
               pokemons.length > 0 &&
               pokemons.map((p) => <PokemonC key={p.name} pokemon={p}></PokemonC>)}
         </div>
      </div>
   )
}

export default Home
