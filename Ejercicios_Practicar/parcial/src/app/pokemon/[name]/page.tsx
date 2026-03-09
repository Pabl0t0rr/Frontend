'use client'

import { getPokemonByName } from '@/lib/api/pokemon'
import { PokemonT } from '@/types/pokemon'
import { AxiosError } from 'axios'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import './page.css'

const getPokemonInfo = () => {
   const { name } = useParams()
   const router = useRouter()

   const [pokemon, setPokemon] = useState<PokemonT | null>(null)
   const [loading, setLoading] = useState<boolean>(true)
   const [error, setError] = useState<string | null>(null)

   useEffect(() => {
      if (!name) return

      getPokemonByName(name as string)
         .then((p) => setPokemon(p))
         .catch((err: AxiosError) => setError(err.message))
         .finally(() => setLoading(false))
   }, [name])

   return (
      <div className="container">
         {loading && <p>Cargando...</p>}
         {error && <p>Error: {error}</p>}
         {!loading && !error && pokemon && (
            <div className="pokemonInfoContainer">
               <p>Nombre Pokemon: {pokemon?.name}</p>
               <p>Peso Pokemon: {pokemon?.weight}</p>
               <p>Altura Pokemon: {pokemon?.height}</p>
               <p>Experiencia Base: {pokemon?.base_experience}</p>
               <button onClick={() => router.back()}>Volver</button>
            </div>
         )}
      </div>
   )
}

export default getPokemonInfo
